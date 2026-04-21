function HighlightTitle({ children }) {
  return <h4 className="text-lg font-bold text-indigo-900">{children}</h4>;
}

function SectionFourContent() {
  return (
    <div className="mt-8 space-y-8 text-left">
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-indigo-800">
          8. Giá trị thặng dư trong kinh tế số
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Kinh tế số (Digital Economy) là nền kinh tế vận hành chủ yếu dựa trên
          các công nghệ số và các nguồn tài nguyên số, đặc biệt là dữ liệu số.
          Nó không chỉ là việc ứng dụng công nghệ thông tin vào sản xuất truyền
          thống, mà còn bao gồm mọi hoạt động kinh tế dựa trên đầu vào kỹ thuật
          số.
        </p>
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 space-y-3">
        <HighlightTitle>Đặc trưng cốt lõi</HighlightTitle>
        <p className="text-sm text-slate-700 leading-relaxed">
          Dữ liệu trở thành nguồn tài nguyên chiến lược mới, và các nền tảng số
          (Platform) như Google, Facebook, Amazon đóng vai trò trung tâm điều
          phối kinh tế.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Kinh tế số tạo ra các mô hình kinh doanh hoàn toàn mới như kinh tế
          chia sẻ (Sharing Economy), kinh tế theo yêu cầu và kinh tế Gig (Gig
          Economy - nền kinh tế dựa trên hợp đồng ngắn hạn, làm việc tự do).
        </p>
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-white p-5 space-y-3">
        <HighlightTitle>
          Sự kết hợp: Giá trị thặng dư trong Kinh tế số diễn ra như thế nào?
        </HighlightTitle>
        <p className="text-sm text-slate-700 leading-relaxed">
          Trong kỷ nguyên số, máy móc hay Trí tuệ nhân tạo (AI) không tự sinh ra
          giá trị mới, mà chỉ có sức lao động của con người mới có khả năng sản
          sinh ra giá trị thặng dư. Tuy nhiên, hình thức tạo ra và chiếm đoạt
          thặng dư đã trở nên tinh vi hơn rất nhiều.
        </p>
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 space-y-4">
        <HighlightTitle>
          1. Đối với người lao động làm thuê (lập trình viên, kỹ sư, nhân viên
          nền tảng)
        </HighlightTitle>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-800">
            Giá trị thặng dư tuyệt đối
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Bằng cách tận dụng các thiết bị thông minh và kết nối internet, ranh
            giới giữa thời gian làm việc và nghỉ ngơi bị xóa nhòa. Người lao
            động phải làm việc từ xa, làm thêm ngoài giờ, kéo dài thời gian lao
            động mà không được tăng thu nhập tương ứng.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-800">
            Giá trị thặng dư tương đối
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Việc ứng dụng AI và tự động hóa giúp các doanh nghiệp tối ưu hóa quy
            trình, năng suất lao động tăng vọt. Điều này làm giảm chi phí cần
            thiết để trả lương, từ đó làm tăng tỷ lệ thời gian tạo ra giá trị
            thặng dư cho giới chủ.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-white p-5 space-y-4">
        <HighlightTitle>
          2. Đối với người dùng thông thường (Sự bóc lột "lao động số vô hình")
        </HighlightTitle>
        <p className="text-sm text-slate-700 leading-relaxed">
          Đây là điểm mới mẻ và cốt lõi nhất của kinh tế số. Các nền tảng như
          Facebook, Google hay TikTok không sản xuất ra hàng hóa hữu hình, nhưng
          họ nắm giữ hạ tầng kỹ thuật số.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            Mỗi khi người dùng tương tác, tìm kiếm, nhấn "thích" hay chia sẻ nội
            dung, người dùng đang đóng vai trò như một "người sản xuất" tạo ra
            nội dung và dữ liệu cá nhân.
          </li>
          <li>
            Các nền tảng số chiếm hữu miễn phí nguồn dữ liệu này, dùng thuật
            toán để phân tích và nhóm người dùng lại thành một loại hàng hóa mới
            gọi là "khán giả mục tiêu" (targetable audience).
          </li>
          <li>
            Sau đó, họ bán "khán giả mục tiêu" này cho các công ty quảng cáo để
            thu về lợi nhuận khổng lồ.
          </li>
        </ul>

        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
          <p className="text-sm text-indigo-900 font-semibold">Kết luận</p>
          <p className="mt-1 text-sm text-slate-700 leading-relaxed">
            Quá trình này biến người dùng thành một lực lượng "lao động vô hình"
            hoặc "lao động miễn phí" (free labor): chúng ta liên tục sản sinh ra
            giá trị thông qua hành vi số hóa mỗi ngày, nhưng hoàn toàn không
            được trả công, không có hợp đồng lao động và không được chia sẻ lợi
            ích từ giá trị thặng dư khổng lồ mà các tập đoàn công nghệ thu được.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SectionFourContent;
