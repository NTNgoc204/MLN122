import { useState } from "react";
import { TrendingUp } from "lucide-react";

function CapitalAccumulationGame() {
  const initialCapital = 1000;
  const surplusRate = 0.2;

  const [cycle, setCycle] = useState(1);
  const [capital, setCapital] = useState(initialCapital);
  const [reinvestRate, setReinvestRate] = useState(50);
  const [history, setHistory] = useState([
    { cycle: 1, capital: initialCapital, reinvested: 0 },
  ]);

  const currentSurplus = capital * surplusRate;
  const amountToReinvest = currentSurplus * (reinvestRate / 100);
  const amountToConsume = currentSurplus - amountToReinvest;

  const handleNextCycle = () => {
    const newCapital = capital + amountToReinvest;
    const nextCycle = cycle + 1;
    setCapital(newCapital);
    setCycle(nextCycle);
    setHistory([
      ...history,
      { cycle: nextCycle, capital: newCapital, reinvested: amountToReinvest },
    ]);
  };

  const resetGame = () => {
    setCycle(1);
    setCapital(initialCapital);
    setReinvestRate(50);
    setHistory([{ cycle: 1, capital: initialCapital, reinvested: 0 }]);
  };

  const maxCapital = Math.max(...history.map((h) => h.capital), 2000);

  return (
    <div className="bg-white rounded-2xl border-2 border-amber-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-amber-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Mô phỏng Tích lũy
        </h3>
        <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
          Chu kỳ {cycle}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-5 bg-amber-50/50 p-4 rounded-xl border border-amber-100">
          <div>
            <p className="text-sm font-semibold text-slate-600 mb-1">
              Tư bản hiện tại (Quy mô sản xuất)
            </p>
            <p className="text-2xl font-bold text-slate-800">
              ${capital.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-600 mb-1">
              GTTĐ (Lợi nhuận) sinh ra (20%)
            </p>
            <p className="text-xl font-bold text-emerald-600">
              + ${currentSurplus.toFixed(2)}
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-amber-200">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-700">Quyết định phân bổ:</span>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <label className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Tái đầu tư (Tích lũy): {reinvestRate}%</span>
                  <span className="font-bold text-amber-600">
                    ${amountToReinvest.toFixed(2)}
                  </span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={reinvestRate}
                  onChange={(e) => setReinvestRate(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Tiêu dùng cá nhân: {100 - reinvestRate}%</span>
                <span className="font-bold text-rose-500">
                  ${amountToConsume.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleNextCycle}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-sm active:scale-[0.98]"
          >
            Tiến hành Chu kỳ {cycle + 1}
          </button>

          {cycle > 1 && (
            <button
              onClick={resetGame}
              className="w-full text-xs font-bold text-slate-400 hover:text-slate-600 underline"
            >
              Làm lại từ đầu
            </button>
          )}
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-end h-64 overflow-y-auto">
          <p className="text-xs font-bold text-slate-400 mb-3 text-center uppercase tracking-wider">
            Lịch sử tăng trưởng Tư bản
          </p>
          <div className="space-y-2 flex-1 flex flex-col justify-end">
            {history.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs">
                <span className="w-8 text-slate-500 font-medium">
                  C.{item.cycle}
                </span>
                <div className="flex-1 h-6 bg-slate-200 rounded-md overflow-hidden flex">
                  <div
                    className="h-full bg-amber-400 transition-all duration-500 relative"
                    style={{ width: `${(item.capital / maxCapital) * 100}%` }}
                  >
                    {item.reinvested > 0 && (
                      <div
                        className="absolute right-0 top-0 h-full bg-amber-500"
                        style={{
                          width: `${(item.reinvested / item.capital) * 100}%`,
                        }}
                      />
                    )}
                  </div>
                </div>
                <span className="w-14 text-right font-bold text-slate-700">
                  ${Math.round(item.capital)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500 text-center">
        * Kéo thanh trượt để thay đổi tỷ lệ tái đầu tư. Nếu bạn tiêu dùng hết
        (0%), quy mô tư bản sẽ giậm chân tại chỗ. Nếu bạn tái đầu tư cao, tư bản
        sẽ phình to rất nhanh (Tích tụ tư bản).
      </p>
    </div>
  );
}

export default CapitalAccumulationGame;
