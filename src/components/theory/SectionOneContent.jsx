import { Cpu } from "lucide-react";
import SurplusValueGame from "./SurplusValueGame";

function SectionOneContent() {
  return (
    <div className="mt-8 space-y-12 text-left">
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-emerald-800">
          1. Nguồn gốc của Giá trị thặng dư
        </h3>
        <p className="text-slate-700 leading-relaxed">
          C. Mác phân tích sự vận động của tiền tệ khi biến thành tư bản để tìm
          ra nguồn gốc của giá trị thặng dư. Sự khác biệt nằm ở công thức lưu
          thông:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 border-b border-slate-200">
                  Loại hình lưu thông
                </th>
                <th className="px-4 py-3 border-b border-slate-200">
                  Công thức vận động
                </th>
                <th className="px-4 py-3 border-b border-slate-200">
                  Mục đích cuối cùng
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-medium">
                  Lưu thông hàng hóa giản đơn
                </td>
                <td className="px-4 py-3">H - T - H (Hàng - Tiền - Hàng)</td>
                <td className="px-4 py-3 text-slate-600">Giá trị sử dụng</td>
              </tr>
              <tr className="bg-emerald-50/30">
                <td className="px-4 py-3 font-medium text-emerald-700">
                  Lưu thông tư bản
                </td>
                <td className="px-4 py-3 font-semibold text-emerald-700">
                  T - H - T' (T' = T + ΔT)
                </td>
                <td className="px-4 py-3 text-emerald-600 font-medium">
                  Giá trị tăng thêm (ΔT)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-700 leading-relaxed">
          <strong>Hàng hóa sức lao động:</strong> Đây là chìa khóa giải quyết
          mâu thuẫn. Sức lao động là hàng hóa đặc biệt, khi sử dụng nó tạo ra
          một lượng giá trị mới <em>lớn hơn</em> giá trị của bản thân nó. Khoản
          chênh lệch đó chính là giá trị thặng dư (m).
        </p>

        <div className="mt-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Cpu className="w-24 h-24" />
          </div>
          <h4 className="font-semibold text-emerald-400 mb-4 tracking-wide uppercase text-sm">
            Ví dụ thực tế: Nhà máy sợi
          </h4>
          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <p className="text-slate-300 font-medium border-b border-slate-700 pb-2">
                Chi phí sản xuất (Đầu vào)
              </p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>
                  Tiền mua bông:{" "}
                  <span className="text-white font-medium">20$</span>
                </li>
                <li>
                  Hao mòn máy móc:{" "}
                  <span className="text-white font-medium">4$</span>
                </li>
                <li>
                  Sức lao động 1 ngày (12h):{" "}
                  <span className="text-white font-medium">3$</span>
                </li>
              </ul>
              <p className="pt-2 font-bold text-rose-400">Tổng chi phí: 27$</p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-300 font-medium border-b border-slate-700 pb-2">
                Giá trị sản phẩm mới (Đầu ra: 20kg sợi)
              </p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>
                  Giá trị cũ (Bông + Máy):{" "}
                  <span className="text-white font-medium">24$</span>
                </li>
                <li>
                  Giá trị mới (12h lđ, 0.5$/h):{" "}
                  <span className="text-white font-medium">6$</span>
                </li>
              </ul>
              <p className="pt-2 font-bold text-emerald-400">
                Tổng thu về: 30$
              </p>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-700 text-center">
            <p className="text-lg font-bold">
              Giá trị thặng dư (m) = 30$ - 27$ ={" "}
              <span className="text-emerald-400 text-2xl">3$</span>
            </p>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="space-y-3 bg-slate-50 p-5 rounded-2xl">
          <h3 className="text-lg font-bold text-emerald-800">
            2. Bản chất Giá trị thặng dư
          </h3>
          <p className="text-sm text-slate-700">
            Giá trị thặng dư <strong>(m)</strong> là bộ phận giá trị mới dôi ra
            ngoài giá trị sức lao động, do công nhân làm thuê tạo ra và bị nhà
            tư bản chiếm đoạt.
          </p>
          <ul className="text-sm space-y-2 text-slate-600 mt-2">
            <li>
              <strong className="text-slate-800">Tư bản bất biến (c):</strong>{" "}
              Máy móc, nguyên liệu. Không đổi lượng, chuyển nguyên vẹn vào sp.
            </li>
            <li>
              <strong className="text-slate-800">Tư bản khả biến (v):</strong>{" "}
              Tiền mua sức lao động. Tạo ra giá trị mới & giá trị thặng dư.
            </li>
          </ul>
          <div className="mt-3 inline-block bg-white px-4 py-2 rounded-lg border border-slate-200 font-mono font-bold text-slate-800 shadow-sm">
            W = c + v + m
          </div>
        </section>

        <section className="space-y-3 bg-slate-50 p-5 rounded-2xl">
          <h3 className="text-lg font-bold text-emerald-800">
            3. Hai thước đo cơ bản
          </h3>
          <p className="text-sm text-slate-700">
            Đánh giá quy mô và trình độ chiếm đoạt.
          </p>
          <div className="space-y-3 mt-2">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Tỷ suất GTTĐ (Trình độ bóc lột)
              </p>
              <p className="font-mono text-emerald-600 font-bold">
                m' = (m / v) × 100%
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Khối lượng GTTĐ (Quy mô bóc lột)
              </p>
              <p className="font-mono text-emerald-600 font-bold">M = m' × V</p>
              <p className="text-xs text-slate-500 mt-1">
                (V: tổng tư bản khả biến)
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="space-y-4 border-2 border-emerald-100 rounded-2xl p-6 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-emerald-800">
            4. Các phương pháp sản xuất GTTĐ
          </h3>
          <span className="bg-rose-100 text-rose-600 text-xs font-bold px-3 py-1 rounded-full">
            Interactive
          </span>
        </div>
        <p className="text-slate-700 text-sm mb-4">
          Đóng vai nhà tư bản, hãy thử các phương pháp để tăng giá trị thặng dư
          (phần màu xanh) từ ngày làm việc của công nhân.
        </p>

        <SurplusValueGame />
      </section>

      <section className="space-y-3 border-l-4 border-emerald-500 pl-5">
        <h3 className="text-xl font-bold text-emerald-800">
          5. Ý nghĩa trong nền kinh tế thị trường
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
          <li>
            <strong>Động lực phát triển:</strong> Việc theo đuổi lợi nhuận thúc
            đẩy các doanh nghiệp không ngừng cải tiến công nghệ.
          </li>
          <li>
            <strong>Công bằng xã hội:</strong> Giúp nhận diện bản chất sự phân
            phối. Trong kinh tế thị trường định hướng XHCN, giá trị thặng dư
            được điều tiết qua thuế và phúc lợi.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SectionOneContent;
