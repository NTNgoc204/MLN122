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
    prompt: 'Ban tao ra 500k nhung chi nhan 300k. Phan con lai goi la gi?',
    options: ['Tien thuong', 'Gia tri thang du', 'Chi phi van hanh'],
    correctIndex: 1,
  },
  {
    id: 'q02',
    prompt: 'Theo Marx, nguon goc gia tri moi chu yeu den tu dau?',
    options: ['Lao dong song', 'May moc tu dong', 'Quang cao'],
    correctIndex: 0,
  },
  {
    id: 'q03',
    prompt: 'Loi nhuan trong thi truong la bieu hien cua cai gi?',
    options: ['Gia tri thang du', 'Tien thuong co dinh', 'Tien thue'],
    correctIndex: 0,
  },
  {
    id: 'q04',
    prompt: 'Tang gio lam de tao them gia tri thang du la dang nao?',
    options: ['Thang du tuyet doi', 'Thang du tuong doi', 'Khong lien quan'],
    correctIndex: 0,
  },
  {
    id: 'q05',
    prompt: 'Tang nang suat de rut ngan lao dong tat yeu la dang nao?',
    options: ['Thang du tuong doi', 'Thang du tuyet doi', 'Chi la marketing'],
    correctIndex: 0,
  },
  {
    id: 'q06',
    prompt: 'Trong nen kinh te so, ai quyet dinh hien thi gia va phan bo don?',
    options: ['Nguoi lao dong', 'Nen tang va thuat toan', 'Nguoi mua'],
    correctIndex: 1,
  },
  {
    id: 'q07',
    prompt: 'Tai xe Grab tao doanh thu, nhung bi tru chiet khau. Dieu nay cho thay dieu gi?',
    options: ['Phan chia gia tri khong deu', 'Tang thu nhap dong deu', 'Khong co gia tri thang du'],
    correctIndex: 0,
  },
  {
    id: 'q08',
    prompt: 'Freelancer bi thu phi trung gian tren moi hop dong. Phan phi do thuong di ve dau?',
    options: ['Nen tang', 'Khach hang', 'Nha nuoc'],
    correctIndex: 0,
  },
  {
    id: 'q09',
    prompt: 'Cong nghe co the lam gi trong qua trinh tao gia tri?',
    options: ['Tang toc do va nang suat lao dong', 'Tu tao gia tri moi khong can nguoi', 'Xoa bo hoan toan lao dong'],
    correctIndex: 0,
  },
  {
    id: 'q10',
    prompt: 'Nguoi lao dong nhin thay thu nhap tang nhe, cong ty tang nhanh hon. Ai huong loi nhieu hon?',
    options: ['Nguoi lao dong', 'Cong ty', 'Hai ben bang nhau'],
    correctIndex: 1,
  },
  {
    id: 'q11',
    prompt: 'Du lieu va thuat toan trong nen tang so dong vai tro gi?',
    options: ['Cong cu kiem soat phan phoi gia tri', 'Chi de trang tri giao dien', 'Khong co tac dung'],
    correctIndex: 0,
  },
  {
    id: 'q12',
    prompt: 'Neu luong giu nguyen nhung nang suat tang, phan gia tri chenhlech thuong thuoc ve ai?',
    options: ['Chu nen tang/doanh nghiep', 'Nguoi lao dong giu toan bo', 'Khong thuoc ve ai'],
    correctIndex: 0,
  },
  {
    id: 'q13',
    prompt: 'Nguoi lao dong khong lam viec thi gia tri moi co duoc tao ra khong?',
    options: ['Khong', 'Co vi may tu tao', 'Co vi quang cao'],
    correctIndex: 0,
  },
  {
    id: 'q14',
    prompt: 'Tang gio online de nhan them don lien quan den co che nao?',
    options: ['Mo rong lao dong de tao thang du', 'Giam lao dong tat yeu', 'Khong lien quan'],
    correctIndex: 0,
  },
  {
    id: 'q15',
    prompt: 'Tren san thuong mai dien tu, nguoi ban mua quang cao de duoc hien thi tot hon. Ai dat luat cho viec nay?',
    options: ['Nen tang', 'Nguoi ban', 'Nguoi mua'],
    correctIndex: 0,
  },
  {
    id: 'q16',
    prompt: 'Cau nao dung nhat voi chu de gia tri thang du trong kinh te so?',
    options: ['Nguoi tao gia tri luon giu het gia tri', 'Nguoi tao gia tri khong chac giu phan lon', 'Gia tri khong can lao dong'],
    correctIndex: 1,
  },
  {
    id: 'q17',
    prompt: 'Neu cong ty thu phi tren tung giao dich, dong tien do duoc ghi nhan thanh gi?',
    options: ['Doanh thu cua cong ty', 'Luong cua tai xe', 'Ho tro cua khach'],
    correctIndex: 0,
  },
  {
    id: 'q18',
    prompt: 'Khi nguoi lao dong khong nam quyen dat gia, ho thieu dieu gi?',
    options: ['Quyen luc thuong luong', 'Thoi gian online', 'So luong don'],
    correctIndex: 0,
  },
  {
    id: 'q19',
    prompt: 'Muc tieu cua game Money Flow la gi?',
    options: ['Chi de giai tri', 'Lam ro dong tien va ai giu tien', 'Do toc do bam nut'],
    correctIndex: 1,
  },
  {
    id: 'q20',
    prompt: 'Sau cung, thong diep cot loi cua chu de nay la gi?',
    options: ['Tien luon chia deu', 'Gia tri co the duoc tao ra boi nguoi lao dong nhung bi giu lai boi he thong', 'Cong nghe xoa bo moi bat binh dang'],
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
      text: isCorrect ? 'Chinh xac!' : 'Sai roi!',
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
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-rose-700 uppercase">{'Money Flow'}</p>
        <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl">{'Ai giu tien?'}</h1>
        <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-600 sm:text-xl">
          {'Tra loi 10 cau hoi ngau nhien de xem dong tien cua ban va cong ty chay nhu the nao.'}
        </p>
      </header>

      <article className="rounded-[30px] border border-white/70 bg-white/70 p-5 shadow-[0_18px_40px_rgba(13,55,89,0.12)] backdrop-blur-md sm:p-7">
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          <div className={chipBase}>
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">{'Your Money'}</p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-emerald-700">
              <BriefcaseBusiness className="h-5 w-5" />
              {formatMoney(money)}
            </p>
          </div>

          <div className={chipBase}>
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">{'Company'}</p>
            <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-rose-700">
              <Building2 className="h-5 w-5" />
              {formatMoney(companyMoney)}
            </p>
          </div>

          <div className={chipBase}>
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">{'Question'}</p>
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
                {`Company +${flash.companyDelta}k`}
              </span>
            </MotionDiv>
          )}
        </AnimatePresence>

        <main className="rounded-2xl bg-slate-50/80 p-5 sm:p-6">
          {!gameStarted && (
            <section className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">{'Ban la nguoi lao dong trong nen kinh te so'}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {'Game co 20 cau hoi trong kho. Moi lan choi se rut ngau nhien 10 cau. Muc tieu la kiem tien, nhung cong ty luon lay phan tram moi vong.'}
              </p>
              <button
                type="button"
                onClick={startGame}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                <Play className="h-4 w-4" />
                {'Bat dau lam viec'}
              </button>
            </section>
          )}

          {gameStarted && !isFinished && currentQuestion && (
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">{`Cau ${currentIndex + 1}`}</h2>
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
                      {`Ban ${feedback.playerDelta >= 0 ? '+' : ''}${feedback.playerDelta}k | Company +${feedback.companyDelta}k`}
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
                  {'Cau tiep theo'}
                </button>
              )}
            </section>
          )}

          {isFinished && (
            <section className="text-center">
              <h2 className="text-3xl font-semibold text-slate-800">{'Hoan thanh 10 cau hoi'}</h2>
              <p className="mt-3 text-base text-slate-600 sm:text-lg">
                {'Ban da tra loi xong 10 cau ngau nhien tu ngan hang 20 cau hoi.'}
              </p>

              <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-emerald-100/90 px-4 py-4 text-left">
                  <p className="text-sm font-semibold uppercase text-emerald-700">{'Ban giu'}</p>
                  <p className="mt-1 text-3xl font-semibold text-emerald-800">{formatMoney(money)}</p>
                </div>
                <div className="rounded-xl bg-rose-100/90 px-4 py-4 text-left">
                  <p className="text-sm font-semibold uppercase text-rose-700">{'Cong ty giu'}</p>
                  <p className="mt-1 text-3xl font-semibold text-rose-800">{formatMoney(companyMoney)}</p>
                </div>
              </div>

              <div className="mx-auto mt-5 h-3 w-full max-w-3xl overflow-hidden rounded-full bg-slate-200">
                <div className="h-full bg-rose-500" style={{ width: `${companyShare}%` }} />
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-600">{`Cong ty dang nam ${companyShare}% tong dong tien.`}</p>

              <div className="mx-auto mt-5 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">{'Dung'}</p>
                  <p className="text-2xl font-semibold text-emerald-700">{correctCount}</p>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">{'Sai'}</p>
                  <p className="text-2xl font-semibold text-rose-700">{wrongCount}</p>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-800">
                {'Ban tao ra gia tri... nhung ban khong giu phan lon gia tri do.'}
              </p>

              <button
                type="button"
                onClick={startGame}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                <RotateCcw className="h-4 w-4" />
                {'Choi lai'}
              </button>
            </section>
          )}
        </main>
      </article>
    </section>
  )
}

export default GamePage
