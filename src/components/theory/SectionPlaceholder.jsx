function SectionPlaceholder({ title }) {
  return (
    <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center transition-colors hover:border-slate-300 hover:bg-slate-100">
      <p className="text-slate-500 font-medium">
        [Khu vực soạn thảo] - Hãy thêm nội dung chi tiết cho "{title}" vào đây.
      </p>
    </div>
  );
}

export default SectionPlaceholder;
