import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Building2,
  CircleCheckBig,
  CircleX,
  Play,
  RotateCcw,
  TrendingUp,
} from 'lucide-react'

const QUESTION_POOL = [
  {
    id: 'q01',
    prompt: 'Bạn tạo ra 500k nhưng chỉ nhận 300k. Phần còn lại gọi là gì?',
    options: ['Tiền thưởng', 'Giá trị thặng dư', 'Chi phí vận hành'],
    correctIndex: 1,
  },
  {
    id: 'q02',
    prompt: 'Theo Marx, nguồn gốc giá trị mới chủ yếu đến từ đâu?',
    options: ['Lao động sống', 'Máy móc tự động', 'Quảng cáo'],
    correctIndex: 0,
  },
  {
    id: 'q03',
    prompt: 'Lợi nhuận trong thị trường là biểu hiện của cái gì?',
    options: ['Giá trị thặng dư', 'Tiền thưởng cố định', 'Tiền thuê'],
    correctIndex: 0,
  },
  {
    id: 'q04',
    prompt: 'Tăng giờ làm để tạo thêm giá trị thặng dư là dạng nào?',
    options: ['Thặng dư tuyệt đối', 'Thặng dư tương đối', 'Không liên quan'],
    correctIndex: 0,
  },
  {
    id: 'q05',
    prompt: 'Tăng năng suất để rút ngắn lao động tất yếu là dạng nào?',
    options: ['Thặng dư tương đối', 'Thặng dư tuyệt đối', 'Chỉ là marketing'],
    correctIndex: 0,
  },
  {
    id: 'q06',
    prompt: 'Trong nền kinh tế số, ai quyết định hiển thị giá và phân bổ đơn?',
    options: ['Người lao động', 'Nền tảng và thuật toán', 'Người mua'],
    correctIndex: 1,
  },
  {
    id: 'q07',
    prompt: 'Tài xế Grab tạo doanh thu, nhưng bị trừ chiết khấu. Điều này cho thấy điều gì?',
    options: ['Phân chia giá trị không đều', 'Tăng thu nhập đồng đều', 'Không có giá trị thặng dư'],
    correctIndex: 0,
  },
  {
    id: 'q08',
    prompt: 'Freelancer bị thu phí trung gian trên mỗi hợp đồng. Phần phí đó thường đi về đâu?',
    options: ['Nền tảng', 'Khách hàng', 'Nhà nước'],
    correctIndex: 0,
  },
  {
    id: 'q09',
    prompt: 'Công nghệ có thể làm gì trong quá trình tạo giá trị?',
    options: ['Tăng tốc độ và năng suất lao động', 'Tự tạo giá trị mới không cần người', 'Xóa bỏ hoàn toàn lao động'],
    correctIndex: 0,
  },
  {
    id: 'q10',
    prompt: 'Người lao động nhìn thấy thu nhập tăng nhẹ, công ty tăng nhanh hơn. Ai hưởng lợi nhiều hơn?',
    options: ['Người lao động', 'Công ty', 'Hai bên bằng nhau'],
    correctIndex: 1,
  },
  {
    id: 'q11',
    prompt: 'Dữ liệu và thuật toán trong nền tảng số đóng vai trò gì?',
    options: ['Công cụ kiểm soát phân phối giá trị', 'Chỉ để trang trí giao diện', 'Không có tác dụng'],
    correctIndex: 0,
  },
  {
    id: 'q12',
    prompt: 'Nếu lương giữ nguyên nhưng năng suất tăng, phần giá trị chênh lệch thường thuộc về ai?',
    options: ['Chủ nền tảng/doanh nghiệp', 'Người lao động giữ toàn bộ', 'Không thuộc về ai'],
    correctIndex: 0,
  },
  {
    id: 'q13',
    prompt: 'Người lao động không làm việc thì giá trị mới có được tạo ra không?',
    options: ['Không', 'Có vì máy tự tạo', 'Có vì quảng cáo'],
    correctIndex: 0,
  },
  {
    id: 'q14',
    prompt: 'Tăng giờ online để nhận thêm đơn liên quan đến cơ chế nào?',
    options: ['Mở rộng lao động để tạo thặng dư', 'Giảm lao động tất yếu', 'Không liên quan'],
    correctIndex: 0,
  },
  {
    id: 'q15',
    prompt: 'Trên sàn thương mại điện tử, người bán mua quảng cáo để được hiển thị tốt hơn. Ai đặt luật cho việc này?',
    options: ['Nền tảng', 'Người bán', 'Người mua'],
    correctIndex: 0,
  },
  {
    id: 'q16',
    prompt: 'Câu nào đúng nhất với chủ đề giá trị thặng dư trong kinh tế số?',
    options: ['Người tạo giá trị luôn giữ hết giá trị', 'Người tạo giá trị không chắc giữ phần lớn', 'Giá trị không cần lao động'],
    correctIndex: 1,
  },
  {
    id: 'q17',
    prompt: 'Nếu công ty thu phí trên từng giao dịch, dòng tiền đó được ghi nhận thành gì?',
    options: ['Doanh thu của công ty', 'Lương của tài xế', 'Hỗ trợ của khách'],
    correctIndex: 0,
  },
  {
    id: 'q18',
    prompt: 'Khi người lao động không nắm quyền đặt giá, họ thiếu điều gì?',
    options: ['Quyền lực thương lượng', 'Thời gian online', 'Số lượng đơn'],
    correctIndex: 0,
  },
  {
    id: 'q19',
    prompt: 'Mục tiêu của game Dòng tiền là gì?',
    options: ['Chỉ để giải trí', 'Làm rõ dòng tiền và ai giữ tiền', 'Đo tốc độ bấm nút'],
    correctIndex: 1,
  },
  {
    id: 'q20',
    prompt: 'Sau cùng, thông điệp cốt lõi của chủ đề này là gì?',
    options: ['Tiền luôn chia đều', 'Giá trị có thể được tạo ra bởi người lao động nhưng bị giữ lại bởi hệ thống', 'Công nghệ xóa bỏ mọi bất bình đẳng'],
    correctIndex: 1,
  },
]

const QUESTIONS_PER_GAME = 10
const INITIAL_PLAYER_MONEY = 500
const INITIAL_COMPANY_MONEY = 300
const PLAYER_CORRECT_BONUS = 100
const PLAYER_WRONG_PENALTY = 50
const ROUND_CREATED_VALUE = 430
const COMPANY_RATE = 0.3
const COMPANY_TAKE_PER_ROUND = Math.round(ROUND_CREATED_VALUE * COMPANY_RATE)

const chipBase =
  'rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(13,55,89,0.1)] backdrop-blur-md'

const formatMoney = (value) => `${value}k`

const pickRandomQuestions = (pool, count) => {
  const shuffled = [...pool]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
  }

  return shuffled.slice(0, count)
}

function GamePage() {
  const MotionDiv = motion.div
  const MotionSection = motion.section

  const [gameStarted, setGameStarted] = useState(false)
  const [questionSet, setQuestionSet] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [money, setMoney] = useState(INITIAL_PLAYER_MONEY)
  const [companyMoney, setCompanyMoney] = useState(INITIAL_COMPANY_MONEY)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const [locked, setLocked] = useState(false)
  const [flash, setFlash] = useState(null)
  const [flashKey, setFlashKey] = useState(0)

  const currentQuestion = gameStarted && currentIndex < QUESTIONS_PER_GAME ? questionSet[currentIndex] : null
  const isFinished = gameStarted && currentIndex >= QUESTIONS_PER_GAME
  const answeredCount = Math.min(currentIndex, QUESTIONS_PER_GAME)
  const progressValue = Math.round((answeredCount / QUESTIONS_PER_GAME) * 100)

  const companyShare = useMemo(() => {
    const total = money + companyMoney
    if (total <= 0) return 0
    return Math.round((companyMoney / total) * 100)
  }, [money, companyMoney])

  useEffect(() => {
    if (!flash) return undefined

    const timer = setTimeout(() => setFlash(null), 1000)
    return () => clearTimeout(timer)
  }, [flashKey, flash])

  const startGame = () => {
    setGameStarted(true)
    setQuestionSet(pickRandomQuestions(QUESTION_POOL, QUESTIONS_PER_GAME))
    setCurrentIndex(0)
    setMoney(INITIAL_PLAYER_MONEY)
    setCompanyMoney(INITIAL_COMPANY_MONEY)
    setCorrectCount(0)
    setWrongCount(0)
    setFeedback(null)
    setLocked(false)
    setFlash(null)
  }

  const handleAnswer = (selectedIndex) => {
    if (locked || !currentQuestion) return

    const isCorrect = selectedIndex === currentQuestion.correctIndex
    const playerDelta = isCorrect ? PLAYER_CORRECT_BONUS : -PLAYER_WRONG_PENALTY

    setMoney((prev) => prev + playerDelta)
    setCompanyMoney((prev) => prev + COMPANY_TAKE_PER_ROUND)

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1)
    } else {
      setWrongCount((prev) => prev + 1)
    }

    setFeedback({
      type: isCorrect ? 'success' : 'error',
      text: isCorrect ? 'Chính xác!' : 'Sai rồi!',
      playerDelta,
      companyDelta: COMPANY_TAKE_PER_ROUND,
    })

    setLocked(true)
    setFlash({
      playerDelta,
      companyDelta: COMPANY_TAKE_PER_ROUND,
    })
    setFlashKey((prev) => prev + 1)
  }

  const handleNext = () => {
    if (!locked) return

    setFeedback(null)
    setLocked(false)
    setCurrentIndex((prev) => prev + 1)
  }

  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2">
      <header className="mb-8 text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-rose-700 uppercase">{'Dòng tiền'}</p>
        <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl">{'Ai giữ tiền?'}</h1>
        <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-600 sm:text-xl">
          {'Trả lời 10 câu hỏi ngẫu nhiên để xem dòng tiền của bạn và công ty chạy như thế nào.'}
        </p>
      </header>

      <article className="rounded-[30px] border border-white/70 bg-white/70 p-5 shadow-[0_18px_40px_rgba(13,55,89,0.12)] backdrop-blur-md sm:p-7">
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          <div className={chipBase}>
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">{'Tiền của bạn'}</p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-emerald-700">
              <BriefcaseBusiness className="h-5 w-5" />
              {formatMoney(money)}
            </p>
          </div>

          <div className={chipBase}>
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">{'Công ty'}</p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-rose-700">
              <Building2 className="h-5 w-5" />
              {formatMoney(companyMoney)}
            </p>
          </div>

          <div className={chipBase}>
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">{'Câu hỏi'}</p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-indigo-700">
              <TrendingUp className="h-5 w-5" />
              {gameStarted ? `${isFinished ? QUESTIONS_PER_GAME : currentIndex + 1}/${QUESTIONS_PER_GAME}` : `0/${QUESTIONS_PER_GAME}`}
            </p>
          </div>
        </div>

        <div className="mb-5 h-3 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${progressValue}%` }} />
        </div>

        <AnimatePresence>
          {flash && (
            <MotionDiv
              key={`${flashKey}-${currentIndex}`}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-5 flex flex-wrap items-center gap-2"
            >
              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  flash.playerDelta >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                }`}
              >
                {`${flash.playerDelta >= 0 ? '+' : ''}${flash.playerDelta}k`}
              </span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                {`Công ty +${flash.companyDelta}k`}
              </span>
            </MotionDiv>
          )}
        </AnimatePresence>

        <main className="rounded-2xl bg-slate-50/80 p-5 sm:p-6">
          {!gameStarted && (
            <section className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">{'Bạn là người lao động trong nền kinh tế số'}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {'Game có 20 câu hỏi trong kho. Mỗi lần chơi sẽ rút ngẫu nhiên 10 câu. Mục tiêu là kiếm tiền, nhưng công ty luôn lấy phần trăm mỗi vòng.'}
              </p>
              <button
                type="button"
                onClick={startGame}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                <Play className="h-4 w-4" />
                {'Bắt đầu làm việc'}
              </button>
            </section>
          )}

          {gameStarted && !isFinished && currentQuestion && (
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">{`Câu ${currentIndex + 1}`}</h2>
              <p className="mt-2 text-lg leading-relaxed text-slate-700">{currentQuestion.prompt}</p>

              <div className="mt-4 grid gap-3">
                {currentQuestion.options.map((option, optionIndex) => (
                  <button
                    key={`${currentQuestion.id}-${option}`}
                    type="button"
                    onClick={() => handleAnswer(optionIndex)}
                    disabled={locked}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-base font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {feedback && (
                  <MotionSection
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className={`mt-5 rounded-xl px-4 py-3 ${feedback.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}
                  >
                    <p className="flex items-center gap-2 font-semibold">
                      {feedback.type === 'success' ? <CircleCheckBig className="h-4 w-4" /> : <CircleX className="h-4 w-4" />}
                      {feedback.text}
                    </p>
                    <p className="mt-1 text-sm">
                      {`Bạn ${feedback.playerDelta >= 0 ? '+' : ''}${feedback.playerDelta}k | Công ty +${feedback.companyDelta}k`}
                    </p>
                  </MotionSection>
                )}
              </AnimatePresence>

              {locked && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  {'Câu tiếp theo'}
                </button>
              )}
            </section>
          )}

          {isFinished && (
            <section className="text-center">
              <h2 className="text-3xl font-semibold text-slate-800">{'Hoàn thành 10 câu hỏi'}</h2>
              <p className="mt-3 text-base text-slate-600 sm:text-lg">
                {'Bạn đã trả lời xong 10 câu ngẫu nhiên từ ngân hàng 20 câu hỏi.'}
              </p>

              <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-emerald-100/90 px-4 py-4 text-left">
                  <p className="text-sm font-semibold uppercase text-emerald-700">{'Bạn giữ'}</p>
                  <p className="mt-1 text-3xl font-semibold text-emerald-800">{formatMoney(money)}</p>
                </div>
                <div className="rounded-xl bg-rose-100/90 px-4 py-4 text-left">
                  <p className="text-sm font-semibold uppercase text-rose-700">{'Công ty giữ'}</p>
                  <p className="mt-1 text-3xl font-semibold text-rose-800">{formatMoney(companyMoney)}</p>
                </div>
              </div>

              <div className="mx-auto mt-5 h-3 w-full max-w-3xl overflow-hidden rounded-full bg-slate-200">
                <div className="h-full bg-rose-500" style={{ width: `${companyShare}%` }} />
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-600">{`Công ty đang nắm ${companyShare}% tổng dòng tiền.`}</p>

              <div className="mx-auto mt-5 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">{'Đúng'}</p>
                  <p className="text-2xl font-semibold text-emerald-700">{correctCount}</p>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">{'Sai'}</p>
                  <p className="text-2xl font-semibold text-rose-700">{wrongCount}</p>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-800">
                {'Bạn tạo ra giá trị... nhưng bạn không giữ phần lớn giá trị đó.'}
              </p>

              <button
                type="button"
                onClick={startGame}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                <RotateCcw className="h-4 w-4" />
                {'Chơi lại'}
              </button>
            </section>
          )}
        </main>
      </article>
    </section>
  )
}

export default GamePage
