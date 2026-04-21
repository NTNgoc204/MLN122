import { useState } from "react";

function SurplusValueGame() {
  const [hours, setHours] = useState(8);
  const [necessary, setNecessary] = useState(4);
  const [isSuper, setIsSuper] = useState(false);

  const surplus = hours - necessary;
  const superProfit = isSuper ? 2 : 0;
  const totalSurplus = surplus + superProfit;

  const resetGame = () => {
    setHours(8);
    setNecessary(4);
    setIsSuper(false);
  };

  return (
    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
          <span>Bắt đầu ca</span>
          <span>
            Tổng: {hours}h {isSuper && "+ Siêu ngạch"}
          </span>
        </div>
        <div className="h-10 w-full flex rounded-lg overflow-hidden shadow-inner bg-slate-200">
          <div
            className="bg-amber-400 flex items-center justify-center text-amber-900 font-bold text-xs transition-all duration-500"
            style={{ width: `${(necessary / Math.max(hours, 12)) * 100}%` }}
          >
            Tất yếu ({necessary}h)
          </div>
          <div
            className="bg-emerald-500 flex items-center justify-center text-white font-bold text-xs transition-all duration-500 relative"
            style={{ width: `${(surplus / Math.max(hours, 12)) * 100}%` }}
          >
            Thặng dư ({surplus}h)
          </div>
          {isSuper && (
            <div className="bg-indigo-500 flex items-center justify-center text-white font-bold text-xs w-1/5 border-l-2 border-white/30 animate-pulse">
              Siêu ngạch!
            </div>
          )}
        </div>
        <div className="mt-3 flex gap-4 text-sm font-semibold text-slate-700">
          <p>v = {necessary}</p>
          <p>m = {totalSurplus}</p>
          <p className="text-emerald-600">
            m' = {Math.round((totalSurplus / necessary) * 100)}%
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <button
          onClick={() => setHours(12)}
          className="p-3 text-left rounded-lg border-2 hover:border-amber-400 bg-white transition disabled:opacity-50"
          disabled={hours === 12}
        >
          <span className="block font-bold text-slate-800 text-sm">
            GTTĐ Tuyệt đối
          </span>
          <span className="block text-xs text-slate-500 mt-1">
            Bắt làm thêm giờ (Tăng lên 12h), giữ nguyên lương.
          </span>
        </button>
        <button
          onClick={() => setNecessary(2)}
          className="p-3 text-left rounded-lg border-2 hover:border-emerald-400 bg-white transition disabled:opacity-50"
          disabled={necessary === 2}
        >
          <span className="block font-bold text-slate-800 text-sm">
            GTTĐ Tương đối
          </span>
          <span className="block text-xs text-slate-500 mt-1">
            Cải tiến Xã hội: Tăng năng suất, giảm thời gian tất yếu xuống 2h.
          </span>
        </button>
        <button
          onClick={() => setIsSuper(true)}
          className="p-3 text-left rounded-lg border-2 hover:border-indigo-400 bg-white transition disabled:opacity-50"
          disabled={isSuper}
        >
          <span className="block font-bold text-slate-800 text-sm">
            GTTĐ Siêu ngạch
          </span>
          <span className="block text-xs text-slate-500 mt-1">
            Cải tiến Cá biệt: Đổi mới công nghệ vượt trội đối thủ.
          </span>
        </button>
      </div>

      {(hours !== 8 || necessary !== 4 || isSuper) && (
        <button
          onClick={resetGame}
          className="mt-4 text-xs font-bold text-slate-400 hover:text-slate-600 underline"
        >
          Hoàn tác (Trở lại 8h tiêu chuẩn)
        </button>
      )}
    </div>
  );
}

export default SurplusValueGame;
