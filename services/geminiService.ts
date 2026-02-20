import { GoogleGenAI, Modality } from "@google/genai";
import { FormData } from '../types';
import { SYSTEM_PROMPT_TEMPLATE } from '../constants';

// --- AUDIO PROCESSING HELPERS ---
// Convert Raw PCM (16-bit, 24kHz, Mono) to WAV container
const pcmToWav = (base64PCM: string): string => {
  // 1. Decode base64 to binary string & convert to buffer
  const binaryString = atob(base64PCM);
  const len = binaryString.length;
  const buffer = new ArrayBuffer(len);
  const view = new DataView(buffer);
  for (let i = 0; i < len; i++) {
    view.setUint8(i, binaryString.charCodeAt(i));
  }

  // 2. WAV Header Parameters for Gemini TTS
  const numOfChannels = 1;
  const sampleRate = 24000;
  const bitDepth = 16;
  const byteRate = sampleRate * numOfChannels * (bitDepth / 8);
  const blockAlign = numOfChannels * (bitDepth / 8);
  const wavHeaderSize = 44;

  // 3. Create buffer for the final WAV file (Header + Data)
  const wavBuffer = new ArrayBuffer(wavHeaderSize + len);
  const wavView = new DataView(wavBuffer);

  // RIFF chunk
  writeString(wavView, 0, 'RIFF');
  wavView.setUint32(4, 36 + len, true); // ChunkSize
  writeString(wavView, 8, 'WAVE');

  // fmt sub-chunk
  writeString(wavView, 12, 'fmt ');
  wavView.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  wavView.setUint16(20, 1, true);   // AudioFormat (1 for PCM)
  wavView.setUint16(22, numOfChannels, true);
  wavView.setUint32(24, sampleRate, true);
  wavView.setUint32(28, byteRate, true);
  wavView.setUint16(32, blockAlign, true);
  wavView.setUint16(34, bitDepth, true);

  // data sub-chunk
  writeString(wavView, 36, 'data');
  wavView.setUint32(40, len, true); // Subchunk2Size

  // 4. Combine Header and PCM Data
  const pcmBytes = new Uint8Array(buffer);
  const wavBytes = new Uint8Array(wavBuffer);
  wavBytes.set(pcmBytes, 44);

  // 5. Encode back to Base64 (Chunked to prevent stack overflow)
  let binary = '';
  const bytes = new Uint8Array(wavBuffer);
  const chunkSize = 8192;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunkSize)));
  }

  return btoa(binary);
};

const writeString = (view: DataView, offset: number, string: string) => {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
};
// ------------------------------

const constructPrompt = (formData: FormData): string => {
  const userRequest = `
    THÔNG TIN CHI TIẾT GIA CHỦ:
    - Họ và tên: ${formData.fullName || "Chưa cung cấp"}
    - Ngày tháng năm sinh: ${formData.dob || "Chưa cung cấp"}
    - Khu vực đang sống: ${formData.location || "Chưa cung cấp"}
    - Công việc hiện tại: ${formData.currentJob || "Chưa cung cấp"}
    - Giới tính: ${formData.gender}
    - Con giáp: ${formData.zodiac}
    
    CHỦ ĐỀ YÊU CẦU: ${formData.topic}
    
    CÂU HỎI CHI TIẾT/MỞ RỘNG:
    "${formData.superChat || "Hãy phân tích chi tiết và chuẩn xác theo thông tin trên."}"
    
    YÊU CẦU BẮT BUỘC (SIÊU CẤP VIP PRO): 
    1. **TỐC ĐỘ ÁNH SÁNG & SÚC TÍCH**: Trả lời CỰC KỲ NGẮN GỌN, ĐI THẲNG VÀO VẤN ĐỀ. Loại bỏ mọi câu từ rườm rà.
    2. **TƯ DUY THỊNH VƯỢNG & TÍCH CỰC TUYỆT ĐỐI**: Tập trung 100% vào CƠ HỘI, TÀI LỘC, MAY MẮN. 
       - KHÔNG NÓI ĐIỀU XUI XẺO. Nếu có hạn, hãy biến nó thành CƠ HỘI ĐỂ THAY ĐỔI và đưa ra giải pháp hoá giải ngay.
       - Làm cho người đọc cảm thấy HẠNH PHÚC, PHẤN CHẤN, ĐẦY NĂNG LƯỢNG.
    3. **GIỌNG VĂN NGỌT NGÀO & CUỐN HÚT (PHONG CÁCH MIỀN TÂY NAM BỘ)**: 
       - Sử dụng ngôn từ DỄ THƯƠNG, GẦN GŨI, NGỌT NGÀO, ẤM ÁP như "rót mật vào tai".
       - Có thể dùng các từ đệm nhẹ nhàng đặc trưng (nhen, nha, nghen, nè, cưng) một cách tinh tế để tăng sự thân thiện nhưng vẫn giữ sự SANG TRỌNG, ĐẲNG CẤP.
       - Giọng văn như một người em gái, người bạn tri kỷ đang thủ thỉ tâm tình, khích lệ.
    4. **GIÁ TRỊ THỰC TIỄN CAO**: Lời khuyên phải áp dụng được ngay vào công việc, đời sống 2026.
    
    HÃY LÀM CHO NGƯỜI DÙNG CẢM THẤY ĐƯỢC YÊU THƯƠNG, ĐƯỢC TRAO QUYỀN NĂNG VÀ MUỐN NGHE MÃI KHÔNG THÔI.
  `;

  return SYSTEM_PROMPT_TEMPLATE + userRequest;
};

// 1. STREAMING TEXT GENERATION (Ultra Fast)
export const generateFengShuiTextStream = async function* (formData: FormData) {
  const apiKey = process.env.API_KEY;
  const ai = new GoogleGenAI({ apiKey: apiKey || '' });
  const fullPrompt = constructPrompt(formData);

  try {
    // Switch to Flash for maximum speed as requested
    const modelText = 'gemini-3-flash-preview'; 
    
    const responseStream = await ai.models.generateContentStream({
      model: modelText,
      contents: fullPrompt,
      config: {
        temperature: 0.8, 
        topK: 40,
        topP: 0.95,
      }
    });

    for await (const chunk of responseStream) {
      yield chunk.text || "";
    }

  } catch (error) {
    console.error("Stream API Error", error);
    throw error;
  }
};

// 2. BACKGROUND AUDIO GENERATION
export const generateFengShuiAudio = async (text: string): Promise<string | undefined> => {
    const apiKey = process.env.API_KEY;
    const ai = new GoogleGenAI({ apiKey: apiKey || '' });

    // Clean up text for professional speech synthesis - OPTIMIZED FOR VIP CONTENT
    const textForSpeech = text
      .replace(/:::NEXT_TOPIC:::.*$/s, '') // Remove Next Topic tag and everything after
      .replace(/\*\*/g, '') // Remove bold markers
      .replace(/##/g, '')   // Remove h2 markers
      .replace(/#/g, '')    // Remove h1 markers
      .replace(/^\s*-\s/gm, '') // Remove list bullets at start of line
      .replace(/\[.*?\]/g, '') // Remove citations
      .replace(/\(.*?\)/g, '') // Remove parentheses
      .replace(/!/g, '! ')
      .replace(/\?/g, '? ')
      .replace(/\./g, '. ')
      .replace(/\n/g, ', ') // Line breaks to commas
      .replace(/\s+/g, ' ') // Collapse spaces
      .trim();

    try {
        const audioResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash-preview-tts',
            contents: {
              parts: [{ text: textForSpeech }]
            },
            config: {
              responseModalities: [Modality.AUDIO],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName: 'Kore' } 
                }
              }
            }
          });
    
        const rawAudioBase64 = audioResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        
        if (rawAudioBase64) {
             // Convert to WAV so browser can play it
             return pcmToWav(rawAudioBase64);
        }
    } catch (e) {
        console.error("Audio generation error", e);
    }
    return undefined;
};
