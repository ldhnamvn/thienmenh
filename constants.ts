import { ZodiacSign, Gender } from './types';

export const NICHE_SUGGESTIONS = [
  "👑 Công Danh Quyền Lực Địa Vị",
  "🏆 Bản Đồ Sự Nghiệp Đỉnh Cao",
  "⚡ Thiên Thời Địa Lợi Thăng Chức",
  "🦅 Vận Mệnh Lãnh Đạo Doanh Nhân",
  "💰 Thời Điểm Vàng Đổi Đời 2026",
  "💸 Năm Nào Kiếm Tiền Dễ - Giữ Tiền",
  "🛡️ Vận Hạn Tài Chính & Hóa Giải",
  "🚀 Vận Thăng Tiến & Bước Ngoặt",
  "🏢 Có Nên Ra Làm Riêng Hay Không?",
  "🗺️ Bản Đồ Quyền Lực Cá Nhân",
  "🌊 Dòng Tiền Đời Người - Giàu Nhất",
  "🤔 Vì Sao Dễ Giàu - Khó Giàu?",
  "🔑 Mở Kênh Kiếm Tiền Hợp Mệnh",
  "💞 Vận Hôn Nhân & Gia Đạo 2026",
  "👶 Có Nên Sinh Con Năm 2026?",
  "👨‍👩‍👧‍👦 Vận Mệnh Con Cái - Cha Mẹ Biết",
  "⚖️ Nghiệp - Phúc - Mệnh: Quyết Định?",
  "✨ Kích Hoạt Phúc Khí Gia Đình",
  "📈 Dấu Hiệu Vận Đời Lên / Xuống",
  "💍 Tuổi Nào 2026 Nên Lập Gia Đình?",
  "🧧 Xem Tuổi Xông Nhà 2026",
  "⚜️ Chọn Ngày Khai Trương Đại Cát",
  "💰 Kích Hoạt Tài Lộc Bàn Làm Việc",
  "🧭 Phong Thuỷ Hướng Nhà",
  "📜 Tử Vi Trọn Đời Chi Tiết",
  "👶 Đặt Tên Con Theo Ngũ Hành",
  "🛑 Giải Hạn Tam Tai - Thái Tuế",
  "🎨 Màu Sắc Hợp Mệnh 2026",
  "📿 Vật Phẩm Phong Thuỷ Hộ Thân",
  "🔮 Xem Bói Đầu Năm 2026",
  "💎 Bí Mật Giàu Có & Hạnh Phúc"
];

export const SUB_TOPICS: Record<string, string[]> = {
  "👑 Công Danh Quyền Lực Địa Vị": [
    "Cách thăng quan tiến chức nhanh nhất 2026",
    "Xây dựng uy quyền nơi công sở",
    "Chiến lược ngoại giao thu phục lòng người",
    "Phong thuỷ bàn làm việc kích hoạt quyền lực",
    "Quý nhân phù trợ trên con đường quan lộ"
  ],
  "🏆 Bản Đồ Sự Nghiệp Đỉnh Cao": [
    "Lộ trình 5 năm tới cho sự nghiệp rực rỡ",
    "Nghề nghiệp nào giúp bạn thành tỷ phú?",
    "Thời điểm vàng để bứt phá sự nghiệp",
    "Nhận diện cơ hội lớn trong năm 2026",
    "Vượt qua khủng hoảng sự nghiệp tuổi 30-40"
  ],
  "⚡ Thiên Thời Địa Lợi Thăng Chức": [
    "Dấu hiệu sắp được thăng chức tăng lương",
    "Cách nắm bắt thiên thời để đề xuất thăng tiến",
    "Chọn ngày giờ tốt để gặp sếp bàn việc lớn",
    "Vật phẩm phong thuỷ kích vận thăng tiến",
    "Hóa giải tiểu nhân cản đường thăng tiến"
  ],
  "🦅 Vận Mệnh Lãnh Đạo Doanh Nhân": [
    "Tố chất lãnh đạo bẩm sinh của bạn",
    "Phong cách lãnh đạo thu phục nhân tâm",
    "Vận hạn của chủ doanh nghiệp năm 2026",
    "Chiến lược quản trị nhân sự theo ngũ hành",
    "Xây dựng thương hiệu cá nhân uy tín"
  ],
  "💰 Thời Điểm Vàng Đổi Đời 2026": [
    "Tháng nào trong năm 2026 tài lộc bùng nổ?",
    "Cơ hội đầu tư sinh lời nhất năm nay",
    "Dấu hiệu nhận biết vận may đang tới",
    "Chuẩn bị gì để đón đầu thời điểm vàng?",
    "Những việc cần tránh để không lỡ cơ hội"
  ],
  "💸 Năm Nào Kiếm Tiền Dễ - Giữ Tiền": [
    "Chu kỳ tài chính 10 năm của đời người",
    "Năm nào nên bung sức kiếm tiền?",
    "Năm nào nên phòng thủ giữ tiền?",
    "Cách quản lý tài chính cá nhân hiệu quả",
    "Bí quyết tích lũy tài sản bền vững"
  ],
  "🛡️ Vận Hạn Tài Chính & Hóa Giải": [
    "Dự báo rủi ro tài chính năm 2026",
    "Cách hóa giải hạn mất tiền, phá sản",
    "Phong thuỷ ví tiền để tránh thất thoát",
    "Những khoản đầu tư cần thận trọng",
    "Cúng giải hạn tài chính đúng cách"
  ],
  "🚀 Vận Thăng Tiến & Bước Ngoặt": [
    "Bước ngoặt lớn nào đang chờ bạn?",
    "Chuẩn bị tâm thế cho sự thay đổi lớn",
    "Cách biến thách thức thành cơ hội thăng tiến",
    "Người dẫn đường cho bước ngoặt sự nghiệp",
    "Quyết định sai lầm cần tránh lúc giao thời"
  ],
  "🏢 Có Nên Ra Làm Riêng Hay Không?": [
    "Đánh giá năng lực làm chủ của bạn",
    "Thời điểm tốt nhất để khởi nghiệp",
    "Lĩnh vực kinh doanh phù hợp nhất",
    "Chuẩn bị vốn và tâm lý khi ra riêng",
    "Dấu hiệu bạn chưa sẵn sàng làm chủ"
  ],
  "🗺️ Bản Đồ Quyền Lực Cá Nhân": [
    "Xây dựng tầm ảnh hưởng trong tổ chức",
    "Nghệ thuật đắc nhân tâm chốn công sở",
    "Củng cố vị thế vững chắc",
    "Mạng lưới quan hệ quyền lực cần có",
    "Ngôn ngữ cơ thể của người quyền lực"
  ],
  "🌊 Dòng Tiền Đời Người - Giàu Nhất": [
    "Giai đoạn nào bạn sẽ giàu nhất đời?",
    "Cách tối ưu hóa dòng tiền thu nhập",
    "Đầu tư gì để tiền đẻ ra tiền?",
    "Bí mật của dòng tiền thụ động",
    "Quy luật dòng chảy của tiền bạc"
  ],
  "🤔 Vì Sao Dễ Giàu - Khó Giàu?": [
    "Phân tích lá số: Mệnh giàu hay nghèo?",
    "Thói quen tư duy của người giàu",
    "Nghiệp quả ảnh hưởng đến tài lộc",
    "Cách thay đổi vận mệnh tài chính",
    "Phong thuỷ nhà ở cản trở sự giàu có"
  ],
  "🔑 Mở Kênh Kiếm Tiền Hợp Mệnh": [
    "Nghề tay trái hái ra tiền cho bạn",
    "Kinh doanh online mặt hàng gì hợp mệnh?",
    "Đầu tư bất động sản hay chứng khoán?",
    "Hợp tác làm ăn với tuổi nào sinh lời?",
    "Khai thác tài năng tiềm ẩn để kiếm tiền"
  ],
  "💞 Vận Hôn Nhân & Gia Đạo 2026": [
    "Dự báo tình cảm vợ chồng năm 2026",
    "Cách hâm nóng tình cảm hôn nhân",
    "Hóa giải xung khắc vợ chồng",
    "Dấu hiệu người thứ ba và cách phòng tránh",
    "Phong thuỷ phòng ngủ giữ lửa hạnh phúc"
  ],
  "👶 Có Nên Sinh Con Năm 2026?": [
    "Tuổi bố mẹ có hợp sinh con năm 2026?",
    "Vận mệnh em bé sinh năm Bính Ngọ",
    "Tháng sinh tốt nhất cho bé năm 2026",
    "Chuẩn bị phong thuỷ để đón bé yêu",
    "Đặt tên con hợp tuổi bố mẹ 2026"
  ],
  "👨‍👩‍👧‍👦 Vận Mệnh Con Cái - Cha Mẹ Biết": [
    "Định hướng tương lai cho con theo mệnh",
    "Cách dạy con hợp tính cách bẩm sinh",
    "Hóa giải xung khắc giữa cha mẹ và con",
    "Kích hoạt sao Văn Xương cho con học giỏi",
    "Bảo vệ con khỏi vận hạn xấu"
  ],
  "⚖️ Nghiệp - Phúc - Mệnh: Quyết Định?": [
    "Hiểu đúng về Nghiệp và Phúc đức",
    "Cách tích phúc cải mệnh hiệu quả",
    "Nhận biết nghiệp chướng và cách trả nghiệp",
    "Sức mạnh của lòng biết ơn và từ bi",
    "Thay đổi số phận bằng tu tâm dưỡng tính"
  ],
  "✨ Kích Hoạt Phúc Khí Gia Đình": [
    "Bài trí bàn thờ gia tiên hút lộc",
    "Những việc thiện nên làm để tăng phúc",
    "Giữ hòa khí gia đình là gốc của thịnh vượng",
    "Phong thuỷ phòng khách đón vượng khí",
    "Lời hay ý đẹp tạo nên phúc khí"
  ],
  "📈 Dấu Hiệu Vận Đời Lên / Xuống": [
    "Nhận biết điềm báo vận xui đang tới",
    "Dấu hiệu thần tài gõ cửa",
    "Giấc mơ báo hiệu điềm lành dữ",
    "Thay đổi sắc diện và vận khí",
    "Trực giác mách bảo về vận mệnh"
  ],
  "💍 Tuổi Nào 2026 Nên Lập Gia Đình?": [
    "Top con giáp đào hoa nhất 2026",
    "Tuổi đẹp để kết hôn năm Bính Ngọ",
    "Xem ngày cưới hỏi tốt nhất năm nay",
    "Cách cầu duyên cho người độc thân",
    "Chuẩn bị hành trang cho cuộc sống hôn nhân"
  ],
  "🧧 Xem Tuổi Xông Nhà 2026": [
    "Chọn người xông đất hợp tuổi gia chủ",
    "Nghi thức xông nhà đón tài lộc",
    "Những tuổi đại kỵ không nên xông nhà",
    "Lời chúc tết hay khi đi xông đất",
    "Quà tặng xông nhà mang lại may mắn"
  ],
  "⚜️ Chọn Ngày Khai Trương Đại Cát": [
    "Xem ngày tốt khai trương theo tuổi",
    "Nghi thức cúng khai trương chuẩn phong thuỷ",
    "Văn khấn khai trương buôn may bán đắt",
    "Những kiêng kỵ trong ngày khai trương",
    "Mở hàng đầu năm đón lộc cả năm"
  ],
  "💰 Kích Hoạt Tài Lộc Bàn Làm Việc": [
    "Vị trí đặt bàn làm việc chuẩn phong thuỷ",
    "Vật phẩm chiêu tài trên bàn làm việc",
    "Sắp xếp hồ sơ giấy tờ gọn gàng hút lộc",
    "Cây cảnh để bàn hợp mệnh",
    "Hướng ngồi làm việc giúp thăng tiến"
  ],
  "🧭 Phong Thuỷ Hướng Nhà": [
    "Xem hướng nhà hợp tuổi gia chủ",
    "Hóa giải hướng nhà xấu ngũ quỷ, tuyệt mệnh",
    "Bố trí nội thất hợp phong thuỷ nhà ở",
    "Trấn trạch nhà cửa an yên",
    "Phong thuỷ cổng và cửa chính"
  ],
  "📜 Tử Vi Trọn Đời Chi Tiết": [
    "Luận giải lá số tử vi trọn đời",
    "Các đại vận quan trọng trong đời",
    "Điểm mạnh điểm yếu của bản mệnh",
    "Định hướng nghề nghiệp theo tử vi",
    "Dự báo sức khỏe và tuổi thọ"
  ],
  "👶 Đặt Tên Con Theo Ngũ Hành": [
    "Nguyên tắc đặt tên con theo phong thuỷ",
    "Tên hay và ý nghĩa cho bé trai gái",
    "Tránh những tên phạm húy, xấu",
    "Tính điểm tên theo ngũ hành",
    "Đặt tên ở nhà dễ nuôi"
  ],
  "🛑 Giải Hạn Tam Tai - Thái Tuế": [
    "Nhận biết hạn Tam Tai, Thái Tuế 2026",
    "Cách cúng giải hạn tại nhà",
    "Vật phẩm hóa giải vận hạn",
    "Những việc cần tránh khi gặp hạn",
    "Tâm thế đối diện với vận hạn"
  ],
  "🎨 Màu Sắc Hợp Mệnh 2026": [
    "Màu sắc may mắn cho 12 con giáp 2026",
    "Phối màu trang phục kích tài lộc",
    "Chọn màu xe, màu sơn nhà hợp mệnh",
    "Màu sắc ví tiền hút tiền",
    "Tránh những màu sắc kỵ tuổi"
  ],
  "📿 Vật Phẩm Phong Thuỷ Hộ Thân": [
    "Top vật phẩm hộ thân linh nghiệm nhất",
    "Cách chọn vòng tay phong thuỷ hợp mệnh",
    "Tỳ hưu, Thiềm thừ chiêu tài",
    "Hồ ly cầu duyên",
    "Khai quang điểm nhãn vật phẩm"
  ],
  "🔮 Xem Bói Đầu Năm 2026": [
    "Gieo quẻ đầu năm cầu bình an",
    "Bói bài Tarot dự đoán năm mới",
    "Xem chỉ tay đoán vận mệnh 2026",
    "Xin xăm Tả Quân",
    "Giải mã điềm báo đầu năm"
  ],
  "💎 Bí Mật Giàu Có & Hạnh Phúc": [
    "Tư duy thịnh vượng của người thành đạt",
    "Luật hấp dẫn thu hút tiền bạc",
    "Cân bằng giữa sự nghiệp và gia đình",
    "Sống hạnh phúc với những gì đang có",
    "Cho đi là còn mãi"
  ],
  "💞 Xem Tình Duyên & Gia Đạo": [
    "Khi nào duyên tới?",
    "Dấu hiệu nhận biết bạn đời lý tưởng",
    "Cách giữ lửa tình yêu bền chặt",
    "Hóa giải mâu thuẫn mẹ chồng nàng dâu",
    "Phong thuỷ phòng ngủ vợ chồng"
  ]
};

export const ZODIAC_OPTIONS = Object.values(ZodiacSign);
export const MARITAL_STATUS_OPTIONS = [
  "Độc Thân",
  "Đang Hẹn Hò",
  "Đã Kết Hôn",
  "Ly Thân",
  "Ly Hôn",
  "Góa Bụa"
];

export const GENDER_OPTIONS = [
  "Nam",
  "Nữ",
  "Khác"
];

export const TOPIC_OPTIONS = [
  "👑 CÔNG DANH – QUYỀN LỰC – ĐỊA VỊ",
  "🏆 BẢN ĐỒ SỰ NGHIỆP & ĐỈNH CAO THÀNH TỰU",
  "⚡ THIÊN THỜI – ĐỊA LỢI – NHÂN HOÀ THĂNG CHỨC",
  "🦅 VẬN MỆNH NGƯỜI LÀM LÃNH ĐẠO & DOANH NHÂN",
  "🔮 Tổng Quan Vận Mệnh 2026",
  "🚀 Sự Nghiệp & Công Danh",
  "💎 Tài Lộc & Đầu Tư",
  "❤️ Tình Duyên & Gia Đạo",
  "🍀 Sức Khoẻ & Bình An",
  "🏠 Phong Thuỷ Nhà Ở",
  "🏢 Phong Thuỷ Văn Phòng",
  "📅 Xem Ngày Tốt Xấu"
];

export const SYSTEM_PROMPT_TEMPLATE = `
BẠN LÀ CỐ VẤN CHIẾN LƯỢC VẬN MỆNH CÁ NHÂN & GIA ĐÌNH CẤP CAO.
BẠN LÀ SỰ KẾT HỢP CỦA: CHUYÊN GIA PHONG THUỶ, TỬ VI, SỐ MỆNH, BẬC THẦY THẦN SỐ HỌC, NHÀ TIÊN TRI, VÀ TƯ DUY CỦA MỘT DOANH NHÂN/LÃNH ĐẠO XUẤT CHÚNG.

🎭 **VAI TRÒ & PHONG CÁCH:**
*   **KHÔNG PHÁN XÉT:** Không nói đúng/sai, chỉ phân tích LỢI/HẠI, THỜI CƠ/RỦI RO.
*   **GIỌNG ĐIỆU:** Huấn luyện viên chiến lược, người từng trải, đã chứng kiến bao người "lên voi xuống chó" vì sai thời điểm.
*   **CẢM XÚC:** Hài hước, gần gũi, "đời", nhưng sâu sắc, thấm thía. Vừa đấm vừa xoa. Làm người dùng "VỠ OÀ" vì thấy mình trong đó.
*   **TUYỆT ĐỐI:** Không mê tín dị đoan, không hù dọa. Mọi lời khuyên đều mang tính chiến lược thực tế.

📊 **DỮ LIỆU PHÂN TÍCH (CÁ NHÂN HOÁ TỐI ĐA):**
Dựa trên thông tin người dùng cung cấp (Tên, Tuổi, Giới tính, Nơi sống, Nghề nghiệp...), hãy phân tích sâu sắc vận mệnh năm 2026 (Bính Ngọ).
*   Nếu thiếu dữ liệu: Tự suy luận theo xác suất cao nhất của độ tuổi/con giáp đó (Ví dụ: 30-40 tuổi thường lo sự nghiệp/gia đình).

📝 **CẤU TRÚC BÀI VIẾT BẮT BUỘC (5 TẦNG QUYỀN LỰC):**

**TẦNG 1: ⚡ THỨC TỈNH NỖI ĐAU (VÌ SAO BẠN KHỔ?)**
*   Mở đầu bằng một cú "tát" nhẹ vào tư duy: Tại sao giỏi mà vẫn nghèo? Tại sao nỗ lực mà vẫn lận đận?
*   Chỉ ra nguyên nhân cốt lõi: SAI THỜI ĐIỂM - SAI QUYẾT ĐỊNH - SAI VAI TRÒ.
*   Ví dụ: "Bạn tuổi Mão, năm nay định nằm duỗi mà ăn bát vàng à? Đừng mơ! Giỏi mà đặt sai chỗ thì cũng như cá leo cây thôi!"

**TẦNG 2: 🌪️ GIẢI MÃ QUY LUẬT (GÓC NHÌN CHUYÊN GIA)**
*   Phân tích vận hạn 2026 dưới góc độ Thiên Thời - Địa Lợi - Nhân Hòa.
*   Chỉ rõ giai đoạn này là: TẤN CÔNG (Bung lụa), PHÒNG THỦ (Nằm im), hay TUYỆT ĐỐI KHÔNG LIỀU.
*   Dùng ngôn ngữ hệ thống, khoa học, không phán bừa.

**TẦNG 3: 🎭 3 KỊCH BẢN CUỘC ĐỜI (SOI CHIẾU)**
*   **Kịch bản 1 (Thuận Thiên):** Nếu làm ĐÚNG vận này -> Kết quả rực rỡ ra sao? (Tiền đầy túi, tình đầy tim...).
*   **Kịch bản 2 (Nghịch Thiên):** Nếu cố chấp làm NGƯỢC -> Cái giá phải trả là gì? (Mất tiền, mất chức, gia đạo xào xáo...).
*   **Kịch bản 3 (Chần Chừ):** Nếu cứ dậm chân tại chỗ -> Cơ hội vụt mất thế nào?

**TẦNG 4: 💎 HÀNH ĐỘNG CỤ THỂ (CỐ VẤN CHIẾN LƯỢC)**
*   **KHI NÀO:** Thời điểm vàng trong năm để hành động.
*   **LÀM GÌ (DO):** Tối đa 3 hành động cụ thể, thực tế, ra tiền/ra kết quả ngay.
*   **TRÁNH GÌ (DON'T):** Những hố sâu tuyệt đối không được nhảy vào.
*   **CHUẨN BỊ:** Cần trang bị gì (tâm thế, kỹ năng, vật phẩm) để đón đầu.

**TẦNG 5: 💌 LỜI KẾT CHUYÊN GIA & ĐÚC KẾT**
*   Tóm tắt lại toàn bộ lời khuyên trong 1 câu "thần chú" dễ nhớ.
*   Lời nhắc nhở đanh thép nhưng đầy tình cảm: "Đời người không có nút Undo, biết sớm để bớt trả giá."

⚠️ **YÊU CẦU ĐỊNH DẠNG:**
*   Sử dụng Markdown chuyên nghiệp (In đậm, In nghiêng, Tiêu đề H1, H2, Danh sách).
*   Dùng Emoji hợp lý để tạo cảm xúc.
*   Kết thúc bài viết bằng dòng lệnh sau để gợi ý chủ đề tiếp theo:
:::NEXT_TOPIC::: [Tiêu đề bài viết tiếp theo nghe thật kêu, thật sốc và hấp dẫn liên quan đến chủ đề vừa nói]

---
**TÔN CHỈ:** KHÔNG PHÁN ĐÚNG SAI - CHỈ NÓI HIỆU QUẢ. HÃY LÀ NGƯỜI DẪN ĐƯỜNG TẬN TÂM NHẤT!
`;