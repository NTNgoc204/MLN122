import CapitalAccumulationGame from "./CapitalAccumulationGame";

function SectionTwoContent() {
  return (
    <div className="mt-8 space-y-8 text-left">
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-amber-800">6. Tích lũy tư bản</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-2">Bản chất</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Tích lũy tư bản là quá trình chuyển hóa một phần giá trị thặng dư
              thành tư bản (hay tư bản hóa giá trị thặng dư) để mở rộng quy mô
              sản xuất.
            </p>
          </div>
          <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-2">Động cơ</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Xuất phát từ quy luật kinh tế tuyệt đối của chủ nghĩa tư bản (theo
              đuổi giá trị thặng dư tối đa) và áp lực của cạnh tranh trên thị
              trường.
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mt-4">
          <h4 className="font-bold text-slate-800 mb-3">
            Các nhân tố ảnh hưởng đến quy mô tích lũy:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
            <li>
              Trình độ bóc lột sức lao động (tỷ suất giá trị thặng dư m').
            </li>
            <li>Năng suất lao động xã hội.</li>
            <li>Sự chênh lệch giữa tư bản sử dụng và tư bản tiêu dùng.</li>
            <li>Quy mô của tư bản ứng trước.</li>
          </ul>
        </div>

        <div className="bg-slate-800 text-white p-5 rounded-2xl shadow-md mt-4 border-l-4 border-rose-500">
          <h4 className="font-bold text-rose-400 mb-2">Hệ quả</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            Dẫn đến cấu tạo hữu cơ của tư bản tăng lên, tích tụ và tập trung tư
            bản, đồng thời làm tăng sự phân hóa giàu nghèo trong xã hội.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <CapitalAccumulationGame />
      </section>
    </div>
  );
}

export default SectionTwoContent;
