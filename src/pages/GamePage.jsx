import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import grabDriverImage from "../assets/grab-drvier.png";
import {
  BriefcaseBusiness,
  Building2,
  CircleCheckBig,
  CircleX,
  Play,
  RotateCcw,
  TrendingUp,
} from "lucide-react";

const QUESTION_POOL = [
  {
    id: "q01",
    prompt:
      "Một tài xế tạo ra 1.000.000đ từ cuốc xe nhưng chỉ nhận 700.000đ. 300.000đ còn lại gọi là gì?",
    tag: "cơ bản",
    options: ["Chi phí vận hành", "Giá trị thặng dư", "Tiền thưởng", "Thuế"],
    correctIndex: 1,
    explanation:
      "Phần giá trị tài xế tạo ra nhưng không được nhận chính là giá trị thặng dư.",
  },
  {
    id: "q02",
    prompt: "Trong mô hình Grab, ai là người giữ phần lớn giá trị thặng dư?",
    tag: "nền tảng",
    options: ["Tài xế", "Khách hàng", "Công ty nền tảng", "Nhà nước"],
    correctIndex: 2,
    explanation:
      "Nền tảng thu phí từ mỗi chuyến đi mà không trực tiếp lao động.",
  },
  {
    id: "q03",
    prompt: "Grab thu tiền từ mỗi cuốc xe là hình thức gì?",
    tag: "nền tảng",
    options: ["Lương", "Hoa hồng nền tảng", "Thuế", "Tiền vay"],
    correctIndex: 1,
    explanation:
      "Đây là khoản phí nền tảng thu để đổi lấy quyền kết nối tài xế và khách.",
  },
  {
    id: "q04",
    prompt:
      "Dữ liệu hành trình của tài xế (giờ cao điểm, khu vực đông khách) giúp Grab làm gì?",
    tag: "dữ liệu",
    options: [
      "Không dùng",
      "Tối ưu giá và tăng lợi nhuận",
      "Giảm giá",
      "Chỉ lưu trữ",
    ],
    correctIndex: 1,
    explanation:
      "Dữ liệu giúp nền tảng điều chỉnh giá để thu được nhiều giá trị hơn.",
  },
  {
    id: "q05",
    prompt: "Vì sao Grab có thể mở rộng nhanh mà không tăng chi phí tương ứng?",
    tag: "lý thuyết",
    options: [
      "Có nhiều tiền",
      "Chi phí biên gần bằng 0",
      "Ít khách",
      "Không cần tài xế",
    ],
    correctIndex: 1,
    explanation: "Thêm tài xế không làm tăng nhiều chi phí hệ thống.",
  },
  {
    id: "q06",
    prompt: "Tài xế tự mua xe, tự trả xăng thể hiện điều gì?",
    tag: "lao động",
    options: [
      "Tăng quyền lợi",
      "Chuyển chi phí sang tài xế",
      "Không ảnh hưởng",
      "Giảm giá",
    ],
    correctIndex: 1,
    explanation: "Nền tảng giảm chi phí, từ đó giữ lại nhiều thặng dư hơn.",
  },
  {
    id: "q07",
    prompt: "Thuật toán định giá (giờ cao điểm giá tăng) nhằm mục tiêu gì?",
    tag: "ví dụ",
    options: [
      "Giảm thu nhập tài xế",
      "Tối đa hóa doanh thu",
      "Giảm khách",
      "Không liên quan",
    ],
    correctIndex: 1,
    explanation: "Giá cao giúp nền tảng thu nhiều tiền hơn từ mỗi chuyến.",
  },
  {
    id: "q08",
    prompt: "Hành vi nhận/huỷ cuốc của tài xế tạo ra gì cho Grab?",
    tag: "dữ liệu",
    options: [
      "Không có giá trị",
      "Dữ liệu huấn luyện thuật toán",
      "Chi phí",
      "Thuế",
    ],
    correctIndex: 1,
    explanation: "Dữ liệu này giúp cải thiện hệ thống và tăng lợi nhuận.",
  },
  {
    id: "q09",
    prompt: "Khách dùng app miễn phí nhưng vẫn tạo giá trị bằng cách nào?",
    tag: "nền tảng",
    options: [
      "Không tạo giá trị",
      "Tạo dữ liệu và nhu cầu",
      "Chỉ tiêu tiền",
      "Không liên quan",
    ],
    correctIndex: 1,
    explanation: "Hành vi của khách giúp nền tảng kiếm tiền từ dữ liệu.",
  },
  {
    id: "q10",
    prompt: "So với taxi truyền thống, Grab khác ở điểm nào về thặng dư?",
    tag: "so sánh",
    options: [
      "Không khác",
      "Khai thác thêm dữ liệu",
      "Ít lợi nhuận hơn",
      "Không có thặng dư",
    ],
    correctIndex: 1,
    explanation: "Ngoài lao động, nền tảng còn kiếm từ dữ liệu và thuật toán.",
  },

  // ===== 11–50 =====

  {
    id: "q11",
    prompt: "Nếu nhiều tài xế tham gia, Grab có lợi gì?",
    tag: "network",
    options: [
      "Chi phí tăng mạnh",
      "Tăng hiệu ứng mạng",
      "Giảm lợi nhuận",
      "Không ảnh hưởng",
    ],
    correctIndex: 1,
    explanation:
      "Càng nhiều tài xế, nền tảng càng mạnh và thu được nhiều thặng dư hơn.",
  },
  {
    id: "q12",
    prompt: "Tài xế bị khóa tài khoản thể hiện điều gì?",
    tag: "lao động",
    options: [
      "Bình thường",
      "Nền tảng có quyền lực cao",
      "Có bảo vệ",
      "Không ảnh hưởng",
    ],
    correctIndex: 1,
    explanation: "Thu nhập của tài xế phụ thuộc hoàn toàn vào nền tảng.",
  },
  {
    id: "q13",
    prompt: "Grab giữ dữ liệu khách hàng có lợi gì?",
    tag: "dữ liệu",
    options: [
      "Không có",
      "Tăng khả năng kiếm tiền",
      "Giảm chi phí",
      "Không liên quan",
    ],
    correctIndex: 1,
    explanation: "Dữ liệu giúp bán quảng cáo và tối ưu dịch vụ.",
  },
  {
    id: "q14",
    prompt: "Việc gọi tài xế là 'đối tác' có ý nghĩa gì?",
    tag: "lao động",
    options: [
      "Tăng quyền lợi",
      "Giảm trách nhiệm của công ty",
      "Không khác",
      "Tăng lương",
    ],
    correctIndex: 1,
    explanation: "Công ty không phải trả bảo hiểm hay phúc lợi.",
  },
  {
    id: "q15",
    prompt: "Nếu Grab tăng phí hoa hồng, điều gì xảy ra?",
    tag: "nền tảng",
    options: [
      "Tài xế hưởng lợi",
      "Nền tảng giữ nhiều thặng dư hơn",
      "Khách hưởng lợi",
      "Không ảnh hưởng",
    ],
    correctIndex: 1,
    explanation: "Phần thu nhập của tài xế giảm, nền tảng giữ nhiều hơn.",
  },
  {
    id: "q16",
    prompt: "Khi Grab thu 25% hoa hồng mỗi cuốc xe, phần này thuộc loại gì?",
    tag: "nền tảng",
    options: [
      "Chi phí vận hành",
      "Giá trị thặng dư nền tảng",
      "Tiền thưởng tài xế",
      "Thuế nhà nước",
    ],
    correctIndex: 1,
    explanation:
      "Đây là phần giá trị nền tảng giữ lại từ lao động của tài xế mà không trực tiếp tham gia chạy xe.",
  },
  {
    id: "q17",
    prompt:
      "Việc tài xế phải tự trả chi phí xăng xe ảnh hưởng gì đến thặng dư?",
    tag: "lao động",
    options: [
      "Giảm thặng dư của nền tảng",
      "Tăng thặng dư nền tảng",
      "Không ảnh hưởng",
      "Tăng lương tài xế",
    ],
    correctIndex: 1,
    explanation:
      "Chi phí bị chuyển sang tài xế, giúp nền tảng giữ lại nhiều giá trị hơn.",
  },
  {
    id: "q18",
    prompt:
      "Nếu tài xế chạy nhiều giờ hơn nhưng thu nhập không tăng tương ứng, điều đó cho thấy gì?",
    tag: "cơ bản",
    options: [
      "Hiệu suất tăng",
      "Tỷ lệ thặng dư tăng",
      "Không liên quan",
      "Chi phí giảm",
    ],
    correctIndex: 1,
    explanation:
      "Tài xế tạo ra nhiều giá trị hơn nhưng không được trả tương xứng, phần chênh lệch tăng lên.",
  },
  {
    id: "q19",
    prompt: "Tại sao Grab khuyến khích tài xế chạy vào giờ cao điểm?",
    tag: "ví dụ",
    options: [
      "Để tài xế nghỉ ngơi",
      "Tăng doanh thu từ giá cao",
      "Giảm nhu cầu",
      "Không liên quan",
    ],
    correctIndex: 1,
    explanation: "Giá cao điểm giúp nền tảng thu nhiều tiền hơn từ mỗi chuyến.",
  },
  {
    id: "q20",
    prompt: "Nếu nhiều tài xế cạnh tranh cùng lúc, điều gì xảy ra?",
    tag: "lao động",
    options: [
      "Thu nhập tăng",
      "Thu nhập trung bình giảm",
      "Không thay đổi",
      "Giá tăng",
    ],
    correctIndex: 1,
    explanation:
      "Cạnh tranh cao làm giảm khả năng nhận cuốc, từ đó giảm thu nhập mỗi người.",
  },
  {
    id: "q21",
    prompt: "Thuật toán phân cuốc xe của Grab giúp gì cho nền tảng?",
    tag: "dữ liệu",
    options: [
      "Giảm lợi nhuận",
      "Tối ưu hóa phân phối và tăng hiệu quả",
      "Không ảnh hưởng",
      "Chỉ hỗ trợ tài xế",
    ],
    correctIndex: 1,
    explanation:
      "Thuật toán giúp tối đa hóa số chuyến và doanh thu toàn hệ thống.",
  },
  {
    id: "q22",
    prompt: "Việc tài xế phải duy trì rating cao (điểm sao) có ý nghĩa gì?",
    tag: "lao động",
    options: [
      "Không liên quan",
      "Tăng chất lượng dịch vụ mà không tăng chi phí cho nền tảng",
      "Giảm thặng dư",
      "Tăng lương",
    ],
    correctIndex: 1,
    explanation:
      "Tài xế phải nỗ lực phục vụ tốt hơn nhưng không được trả thêm tương ứng.",
  },
  {
    id: "q23",
    prompt: "Dữ liệu hành vi khách hàng giúp Grab làm gì?",
    tag: "dữ liệu",
    options: [
      "Không dùng",
      "Dự đoán nhu cầu và điều chỉnh giá",
      "Giảm lợi nhuận",
      "Chỉ lưu trữ",
    ],
    correctIndex: 1,
    explanation:
      "Dữ liệu giúp nền tảng định giá tốt hơn để tối đa hóa doanh thu.",
  },
  {
    id: "q24",
    prompt:
      "Nếu Grab tăng giá với khách nhưng giữ nguyên phần chia cho tài xế, điều gì xảy ra?",
    tag: "nền tảng",
    options: [
      "Tài xế hưởng lợi",
      "Nền tảng giữ thêm thặng dư",
      "Khách hưởng lợi",
      "Không thay đổi",
    ],
    correctIndex: 1,
    explanation: "Phần chênh lệch tăng thêm sẽ thuộc về nền tảng.",
  },
  {
    id: "q25",
    prompt: "Tại sao tài xế khó rời bỏ nền tảng như Grab?",
    tag: "network",
    options: [
      "Không có lý do",
      "Hiệu ứng mạng và phụ thuộc khách hàng",
      "Thu nhập cao",
      "Không có cạnh tranh",
    ],
    correctIndex: 1,
    explanation:
      "Nền tảng có nhiều khách nên tài xế phụ thuộc vào đó để kiếm sống.",
  },
  {
    id: "q26",
    prompt: "Nếu Grab cung cấp thưởng (bonus) theo số cuốc, mục tiêu là gì?",
    tag: "ví dụ",
    options: [
      "Giảm thu nhập tài xế",
      "Khuyến khích làm việc nhiều hơn",
      "Giảm số chuyến",
      "Không liên quan",
    ],
    correctIndex: 1,
    explanation:
      "Thưởng giúp tăng số chuyến, từ đó tăng tổng doanh thu nền tảng.",
  },
  {
    id: "q27",
    prompt: "Việc tài xế chờ cuốc (thời gian rảnh) có được trả tiền không?",
    tag: "lao động",
    options: ["Có", "Không", "Tùy ngày", "Tùy khách"],
    correctIndex: 1,
    explanation:
      "Thời gian chờ không được trả lương nhưng vẫn là thời gian lao động thực tế.",
  },
  {
    id: "q28",
    prompt: "Điều gì xảy ra khi nền tảng đạt vị thế gần như độc quyền?",
    tag: "độc quyền",
    options: [
      "Giảm lợi nhuận",
      "Tăng khả năng thu phí và thặng dư",
      "Tăng cạnh tranh",
      "Không ảnh hưởng",
    ],
    correctIndex: 1,
    explanation:
      "Ít đối thủ giúp nền tảng dễ tăng phí mà người dùng khó rời bỏ.",
  },
  {
    id: "q29",
    prompt: "Nếu Grab sử dụng dữ liệu để bán quảng cáo, điều đó có nghĩa gì?",
    tag: "dữ liệu",
    options: [
      "Không liên quan tài xế",
      "Tạo thêm nguồn thặng dư từ dữ liệu",
      "Giảm lợi nhuận",
      "Chỉ hỗ trợ khách",
    ],
    correctIndex: 1,
    explanation:
      "Dữ liệu không chỉ phục vụ vận hành mà còn tạo thêm nguồn thu mới.",
  },
  {
    id: "q30",
    prompt:
      "Tổng thể, mô hình Grab cho thấy điều gì về giá trị thặng dư trong kinh tế số?",
    tag: "tổng kết",
    options: [
      "Thặng dư biến mất",
      "Thặng dư tăng và đa dạng (lao động + dữ liệu)",
      "Không thay đổi",
      "Chỉ từ khách hàng",
    ],
    correctIndex: 1,
    explanation:
      "Không chỉ từ lao động tài xế, nền tảng còn tạo thặng dư từ dữ liệu và quy mô hệ thống.",
  },
];

const INITIAL_COMPANY_MONEY = 0;
const ROUND_CREATED_VALUE = 30;
const COMPANY_RATE = 0.3;
const COMPANY_RATE_PERCENT = Math.round(COMPANY_RATE * 100);
const COMPANY_TAKE_PER_ROUND = ROUND_CREATED_VALUE * COMPANY_RATE;
const DRIVER_GROSS_PER_ROUND = ROUND_CREATED_VALUE - COMPANY_TAKE_PER_ROUND;
const ONE_STAR_FINE_FEE = 20;
const FUEL_RATE = 0.15;
const MOTORBIKE_RATE = 0.1;
const IDLE_RATE = 0.15;
const FUEL_RATE_PERCENT = Math.round(FUEL_RATE * 100);
const MOTORBIKE_RATE_PERCENT = Math.round(MOTORBIKE_RATE * 100);
const IDLE_RATE_PERCENT = Math.round(IDLE_RATE * 100);
const SHIFT_QUESTION_LIMIT = 8;

const chipBase =
  "rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(13,55,89,0.1)] backdrop-blur-md";

const formatMoney = (value) => `${value}k`;

const shuffleQuestions = (pool) => {
  const shuffled = [...pool];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

function GamePage() {
  const MotionDiv = motion.div;
  const MotionSection = motion.section;

  const [gameStarted, setGameStarted] = useState(false);
  const [shiftEnded, setShiftEnded] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [companyMoney, setCompanyMoney] = useState(INITIAL_COMPANY_MONEY);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [locked, setLocked] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [flash, setFlash] = useState(null);
  const [flashKey, setFlashKey] = useState(0);
  const [pendingOneStarPenaltyRides, setPendingOneStarPenaltyRides] =
    useState(0);
  const [oneStarPenaltyTotal, setOneStarPenaltyTotal] = useState(0);

  const currentQuestion =
    gameStarted && !shiftEnded && questionSet.length > 0
      ? (questionSet[currentIndex] ?? null)
      : null;
  const isFinished = gameStarted && shiftEnded;
  const isShiftRunning = gameStarted && !shiftEnded;
  const isDriverExiting = gameStarted && shiftEnded;
  const shouldAnimateDriverScene = isShiftRunning || isDriverExiting;
  const driverMotionClass = isShiftRunning
    ? "animate-driver-arrive"
    : isDriverExiting
      ? "animate-driver-exit"
      : "left-[calc(50%-8rem)]";
  const answeredInCurrentShift = Math.min(
    totalAnswered + (locked ? 1 : 0),
    SHIFT_QUESTION_LIMIT,
  );
  const currentQuestionNumber = Math.min(
    totalAnswered + 1,
    SHIFT_QUESTION_LIMIT,
  );
  const progressValue = Math.round(
    (answeredInCurrentShift / SHIFT_QUESTION_LIMIT) * 100,
  );
  const questionProgressLabel = gameStarted
    ? `${isFinished ? SHIFT_QUESTION_LIMIT : currentQuestionNumber}/${SHIFT_QUESTION_LIMIT}`
    : `0/${SHIFT_QUESTION_LIMIT}`;
  const answeredRounds = correctCount + wrongCount;
  const driverBeforeAnyFeeTotal = answeredRounds * ROUND_CREATED_VALUE;
  const driverAfterPlatformFeeTotal = answeredRounds * DRIVER_GROSS_PER_ROUND;
  const platformFeeTotal =
    driverBeforeAnyFeeTotal - driverAfterPlatformFeeTotal;
  const driverTakeHomeBase = driverAfterPlatformFeeTotal - oneStarPenaltyTotal;
  const fuelFeeTotal = Math.max(0, Math.ceil(driverTakeHomeBase * FUEL_RATE));
  const motorbikeFeeTotal = Math.max(
    0,
    Math.ceil(driverTakeHomeBase * MOTORBIKE_RATE),
  );
  const idleFeeTotal = Math.max(0, Math.ceil(driverTakeHomeBase * IDLE_RATE));
  const totalOperatingFees = fuelFeeTotal + motorbikeFeeTotal + idleFeeTotal;
  const actualDriverEarning = driverTakeHomeBase - totalOperatingFees;

  useEffect(() => {
    if (!flash) return undefined;

    const timer = setTimeout(() => setFlash(null), 1000);
    return () => clearTimeout(timer);
  }, [flashKey, flash]);

  const startGame = () => {
    setGameStarted(true);
    setShiftEnded(false);
    setQuestionSet(shuffleQuestions(QUESTION_POOL));
    setCurrentIndex(0);
    setTotalAnswered(0);
    setCompanyMoney(INITIAL_COMPANY_MONEY);
    setCorrectCount(0);
    setWrongCount(0);
    setFeedback(null);
    setLocked(false);
    setSelectedOptionIndex(null);
    setFlash(null);
    setPendingOneStarPenaltyRides(0);
    setOneStarPenaltyTotal(0);
  };

  const endShift = () => {
    if (!gameStarted || shiftEnded) return;
    setShiftEnded(true);
    setLocked(false);
    setSelectedOptionIndex(null);
    setFeedback(null);
  };

  const handleAnswer = (selectedIndex) => {
    if (locked || !currentQuestion) return;

    setSelectedOptionIndex(selectedIndex);

    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    const hasPendingOneStarFine = pendingOneStarPenaltyRides > 0;
    const oneStarFineAppliedThisRide = hasPendingOneStarFine
      ? ONE_STAR_FINE_FEE
      : 0;
    const companyDeltaThisRide =
      COMPANY_TAKE_PER_ROUND + oneStarFineAppliedThisRide;
    const rideActualEarning = Math.max(
      0,
      DRIVER_GROSS_PER_ROUND - oneStarFineAppliedThisRide,
    );

    setCompanyMoney((prev) => prev + companyDeltaThisRide);

    if (oneStarFineAppliedThisRide > 0) {
      setOneStarPenaltyTotal((prev) => prev + oneStarFineAppliedThisRide);
    }

    setPendingOneStarPenaltyRides(
      (prev) => Math.max(prev - 1, 0) + (isCorrect ? 0 : 1),
    );

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }

    setFeedback({
      type: isCorrect ? "success" : "error",
      text: isCorrect ? "Chính xác!" : "Sai rồi!",
      explanation: currentQuestion.explanation,
      ridePrice: ROUND_CREATED_VALUE,
      rideDriverEarning: DRIVER_GROSS_PER_ROUND,
      rideActualEarning,
      oneStarFineAppliedThisRide,
      oneStarFineNextRide: isCorrect ? 0 : ONE_STAR_FINE_FEE,
      companyDelta: companyDeltaThisRide,
      companyRatePercent: COMPANY_RATE_PERCENT,
    });

    setLocked(true);
    if (isCorrect) {
      setFlash({
        driverDelta: rideActualEarning,
        companyDelta: companyDeltaThisRide,
        oneStarFineAppliedThisRide,
      });
      setFlashKey((prev) => prev + 1);
    } else {
      setFlash(null);
    }
  };

  const handleNext = () => {
    if (!locked) return;

    const answeredAfterNext = totalAnswered + 1;

    setFeedback(null);
    setLocked(false);
    setSelectedOptionIndex(null);
    setTotalAnswered(answeredAfterNext);

    if (answeredAfterNext >= SHIFT_QUESTION_LIMIT) {
      endShift();
      return;
    }

    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;

      if (nextIndex >= questionSet.length) {
        setQuestionSet(shuffleQuestions(QUESTION_POOL));
        return 0;
      }

      return nextIndex;
    });
  };

  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2">
      <header
        className={isShiftRunning ? "mb-3 text-center" : "mb-8 text-center"}
      >
        <p
          className={`${
            isShiftRunning ? "mb-1 text-[10px]" : "mb-2 text-xs"
          } font-semibold tracking-[0.2em] text-rose-700 uppercase`}
        >
          {"Dòng tiền"}
        </p>
        <h1
          className={
            isShiftRunning
              ? "text-2xl font-semibold text-slate-800 sm:text-3xl"
              : "text-4xl font-semibold text-slate-800 sm:text-5xl"
          }
        >
          {"Bạn thật sự giữ được bao nhiêu?"}
        </h1>
        {!isShiftRunning && (
          <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-600 sm:text-xl">
            {
              "Bắt đầu ca làm để trả lời câu hỏi liên tục. Khi kết thúc ca, game sẽ dừng và tổng kết dòng tiền."
            }
          </p>
        )}
      </header>

      <article
        className={`rounded-[30px] border border-white/70 bg-white/70 shadow-[0_18px_40px_rgba(13,55,89,0.12)] backdrop-blur-md ${
          isShiftRunning ? "p-3 sm:p-4" : "p-5 sm:p-7"
        }`}
      >
        {isShiftRunning ? (
          <>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/80 bg-white/85 px-3 py-2 text-xs sm:text-sm">
              <p className="font-semibold text-indigo-700">
                {`Câu ${questionProgressLabel}`}
              </p>
              <p className="font-medium text-teal-700">
                {`Tài xế ${formatMoney(driverTakeHomeBase)}`}
              </p>
            </div>

            <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 grid gap-3 md:grid-cols-3">
              <div className={chipBase}>
                <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
                  {"Thực nhận tài xế"}
                </p>
                <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-teal-700">
                  <BriefcaseBusiness className="h-5 w-5" />
                  {formatMoney(driverTakeHomeBase)}
                </p>
              </div>

              <div className={chipBase}>
                <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
                  {"Công ty"}
                </p>
                <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-rose-700">
                  <Building2 className="h-5 w-5" />
                  {formatMoney(companyMoney)}
                </p>
              </div>

              <div className={chipBase}>
                <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
                  {"Câu hỏi"}
                </p>
                <p className="mt-1 flex items-center gap-2 text-2xl font-semibold text-indigo-700">
                  <TrendingUp className="h-5 w-5" />
                  {questionProgressLabel}
                </p>
              </div>
            </div>

            <div className="mb-5 h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </>
        )}

        {isFinished && (
          <div className="mb-5 rounded-xl border border-teal-100 bg-teal-50/70 px-4 py-3 text-sm text-slate-700">
            <p className="font-semibold text-teal-800">
              {
                "Thực nhận sau tất cả phí = Thực nhận tài xế - phí xăng - phí xe máy - phí chờ cuốc"
              }
            </p>
            <p className="mt-1">
              {`Thực nhận tài xế ${formatMoney(driverTakeHomeBase)} | xăng -${formatMoney(fuelFeeTotal)} | xe máy -${formatMoney(motorbikeFeeTotal)} | idle -${formatMoney(idleFeeTotal)}`}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              {`Phí 1 sao đã được trừ trong Thực nhận tài xế: -${formatMoney(oneStarPenaltyTotal)}.`}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              {`Phí xăng = ${FUEL_RATE_PERCENT}%, phí xe máy = ${MOTORBIKE_RATE_PERCENT}% và phí idle = ${IDLE_RATE_PERCENT}% của Thực nhận tài xế sau nền tảng.`}
            </p>
          </div>
        )}

        {gameStarted && (
          <section
            className={`overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-r from-cyan-50 via-teal-50 to-emerald-50 ${
              isShiftRunning ? "mb-3 p-3" : "mb-5 p-4"
            }`}
          >
            <div className="relative h-40 overflow-hidden rounded-xl border border-white/80 bg-gradient-to-b from-sky-100 via-sky-50 to-white">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-200/60 via-sky-100/45 to-transparent" />
              <div className="absolute top-4 right-8 h-8 w-8 rounded-full bg-amber-200/90 shadow-[0_0_24px_rgba(251,191,36,0.45)]" />

              <div className="absolute top-6 left-8 h-3 w-14 rounded-full bg-white/80" />
              <div className="absolute top-5 left-13 h-4 w-18 rounded-full bg-white/85" />
              <div className="absolute top-7 left-28 h-3 w-12 rounded-full bg-white/80" />

              <div className="absolute inset-x-0 bottom-12 h-20">
                <div className="absolute bottom-0 left-3 flex items-end gap-2">
                  <div className="h-10 w-5 rounded-t-md bg-slate-400/85" />
                  <div className="h-15 w-6 rounded-t-md bg-slate-500/85" />
                  <div className="h-12 w-5 rounded-t-md bg-slate-400/85" />
                  <div className="h-18 w-7 rounded-t-md bg-slate-500/85" />
                  <div className="h-13 w-5 rounded-t-md bg-slate-400/85" />
                </div>

                <div className="absolute bottom-0 right-4 flex items-end gap-2">
                  <div className="h-12 w-5 rounded-t-md bg-slate-400/85" />
                  <div className="h-17 w-7 rounded-t-md bg-slate-500/85" />
                  <div className="h-11 w-5 rounded-t-md bg-slate-400/85" />
                  <div className="h-14 w-6 rounded-t-md bg-slate-500/85" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-12 h-7 bg-gradient-to-t from-emerald-200/70 to-transparent" />

              <div className="absolute bottom-12 left-12 h-8 w-8 rounded-full bg-emerald-500/90" />
              <div className="absolute bottom-[3.05rem] left-[3.95rem] h-4 w-1 rounded bg-amber-900/70" />

              <div className="absolute bottom-12 left-29 h-7 w-7 rounded-full bg-emerald-500/90" />
              <div className="absolute bottom-[3.05rem] left-[7.45rem] h-4 w-1 rounded bg-amber-900/70" />

              <div className="absolute bottom-12 right-20 h-9 w-9 rounded-full bg-emerald-500/90" />
              <div className="absolute bottom-[3.05rem] right-[5.55rem] h-4 w-1 rounded bg-amber-900/70" />

              <div className="absolute bottom-12 right-9 h-7 w-7 rounded-full bg-emerald-500/90" />
              <div className="absolute bottom-[3.05rem] right-[2.95rem] h-4 w-1 rounded bg-amber-900/70" />

              <div className="absolute bottom-0 left-0 h-12 w-full bg-black">
                <div
                  className={`absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 bg-[repeating-linear-gradient(to_right,#ffffff_0_24px,transparent_24px_44px)] ${shouldAnimateDriverScene ? "animate-lane-flow" : ""}`}
                />
              </div>

              <div className={`absolute bottom-4 w-64 ${driverMotionClass}`}>
                <div className="relative h-32 w-64">
                  <AnimatePresence>
                    {flash && isShiftRunning && (
                      <MotionDiv
                        key={`driver-delta-${flashKey}`}
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: -16, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.92 }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className={`absolute -top-1 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-sm font-bold shadow ${flash.driverDelta >= 0 ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}
                      >
                        {`${flash.driverDelta >= 0 ? "+" : ""}${flash.driverDelta}k`}
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                  <img
                    src={grabDriverImage}
                    alt="Grab rider driving with passenger"
                    className={`absolute bottom-0 left-1/2 h-32 w-auto max-w-none -translate-x-1/2 object-contain select-none ${shouldAnimateDriverScene ? "animate-bike-bob" : ""}`}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        <main
          className={`rounded-2xl bg-slate-50/80 ${
            isShiftRunning ? "p-3 sm:p-4" : "p-5 sm:p-6"
          }`}
        >
          {!gameStarted && (
            <section className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">
                {"Bạn là tài xế công nghệ Grab"}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {
                  "Hãy giúp bác tài hoàn thành ca làm và kiếm thu nhập bằng cách trả lời các câu hỏi sau."
                }
              </p>
              <button
                type="button"
                onClick={startGame}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                <Play className="h-4 w-4" />
                {"Bắt đầu ca làm"}
              </button>
            </section>
          )}

          {gameStarted && !isFinished && currentQuestion && (
            <section>
              <h2
                className={`${
                  isShiftRunning
                    ? "text-xl sm:text-2xl"
                    : "text-2xl sm:text-3xl"
                } font-semibold text-slate-800`}
              >{`Câu ${currentQuestionNumber}`}</h2>
              <p
                className={`${
                  isShiftRunning ? "mt-1 text-base" : "mt-2 text-lg"
                } leading-relaxed text-slate-700`}
              >
                {currentQuestion.prompt}
              </p>

              <div
                className={`${
                  isShiftRunning ? "mt-3 gap-2" : "mt-4 gap-3"
                } grid`}
              >
                {currentQuestion.options.map((option, optionIndex) => {
                  const isCorrectOption =
                    optionIndex === currentQuestion.correctIndex;
                  const isSelectedOption = optionIndex === selectedOptionIndex;
                  const shouldHighlightCorrect =
                    locked && feedback?.type === "error" && isCorrectOption;
                  const shouldHighlightWrongSelection =
                    locked &&
                    feedback?.type === "error" &&
                    isSelectedOption &&
                    !isCorrectOption;

                  return (
                    <button
                      key={`${currentQuestion.id}-${option}`}
                      type="button"
                      onClick={() => handleAnswer(optionIndex)}
                      disabled={locked}
                      className={`rounded-xl border bg-white text-left font-medium transition disabled:cursor-not-allowed disabled:opacity-80 ${
                        isShiftRunning
                          ? "px-3 py-2 text-sm"
                          : "px-4 py-3 text-base"
                      } ${
                        shouldHighlightCorrect
                          ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                          : shouldHighlightWrongSelection
                            ? "border-rose-400 bg-rose-50 text-rose-800"
                            : "border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {feedback && (
                  <MotionSection
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className={`${
                      isShiftRunning ? "mt-3" : "mt-5"
                    } rounded-xl px-4 py-3 ${
                      feedback.type === "success"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    <p className="flex items-center gap-2 font-semibold">
                      {feedback.type === "success" ? (
                        <CircleCheckBig className="h-4 w-4" />
                      ) : (
                        <CircleX className="h-4 w-4" />
                      )}
                      {feedback.text}
                    </p>
                    {feedback.type === "success" ? (
                      <>
                        <p className="mt-1 text-sm">
                          {`Giá cuốc: ${formatMoney(feedback.ridePrice)} | Công ty +${feedback.companyDelta}k`}
                        </p>
                        <p className="mt-1 text-sm">
                          {`Tài xế thực nhận sau nền tảng lấy phí: +${feedback.rideActualEarning}k`}
                        </p>
                        {feedback.oneStarFineAppliedThisRide > 0 && (
                          <p className="mt-1 text-sm text-amber-700">
                            {`Cuốc này bị trừ ${feedback.oneStarFineAppliedThisRide}k do 1 sao từ cuốc trước.`}
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="mt-1 text-sm text-amber-700">
                          {feedback.oneStarFineAppliedThisRide > 0
                            ? `Cuốc này bị trừ ${feedback.oneStarFineAppliedThisRide}k do lỗi trước đó. Lỗi hiện tại sẽ tiếp tục trừ ${feedback.oneStarFineNextRide}k ở cuốc kế tiếp.`
                            : `Tài xế bị đánh giá 1 sao. Phí ${feedback.oneStarFineNextRide}k sẽ trừ ở cuốc kế tiếp.`}
                        </p>
                      </>
                    )}
                    <p className="mt-2 text-sm text-slate-700">
                      {`Giải thích: ${feedback.explanation}`}
                    </p>
                  </MotionSection>
                )}
              </AnimatePresence>

              {locked && (
                <button
                  type="button"
                  onClick={handleNext}
                  className={`${
                    isShiftRunning ? "mt-3" : "mt-5"
                  } inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900`}
                >
                  {"Câu tiếp theo"}
                </button>
              )}

              {!isShiftRunning && (
                <p className="mt-4 text-sm font-medium text-slate-500">
                  {`Đã trả lời ${answeredInCurrentShift}/${SHIFT_QUESTION_LIMIT} câu trong ca hiện tại.`}
                </p>
              )}
            </section>
          )}

          {isFinished && (
            <section className="text-center">
              <h2 className="text-3xl font-semibold text-slate-800">
                {"Kết thúc ca làm"}
              </h2>
              <p className="mt-3 text-base text-slate-600 sm:text-lg">
                {
                  "Ca làm đã kết thúc sau khi hoàn thành đủ 8 câu hỏi. Bạn có thể bắt đầu ca mới bất kỳ lúc nào."
                }
              </p>

              <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-emerald-100/90 px-4 py-4 text-left">
                  <p className="text-sm font-semibold uppercase text-emerald-700">
                    {"Tiền kiếm được trước mọi phí"}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-emerald-800">
                    {formatMoney(driverBeforeAnyFeeTotal)}
                  </p>
                </div>
                <div className="rounded-xl bg-rose-100/90 px-4 py-4 text-left">
                  <p className="text-sm font-semibold uppercase text-rose-700">
                    {"Công ty giữ"}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-rose-800">
                    {formatMoney(companyMoney)}
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-5 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">{"Phí nền tảng"}</p>
                  <p className="text-2xl font-semibold text-rose-700">
                    {`-${formatMoney(platformFeeTotal)}`}
                  </p>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">
                    {"Phí phạt rating 1 sao (đã trừ)"}
                  </p>
                  <p className="text-2xl font-semibold text-rose-700">
                    {`-${formatMoney(oneStarPenaltyTotal)}`}
                  </p>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">{"Phí xăng"}</p>
                  <p className="text-2xl font-semibold text-amber-700">
                    {`-${formatMoney(fuelFeeTotal)}`}
                  </p>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">{"Phí xe máy"}</p>
                  <p className="text-2xl font-semibold text-amber-700">
                    {`-${formatMoney(motorbikeFeeTotal)}`}
                  </p>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]">
                  <p className="text-sm text-slate-500">
                    {"Phí chờ cuốc (idle)"}
                  </p>
                  <p className="text-2xl font-semibold text-amber-700">
                    {`-${formatMoney(idleFeeTotal)}`}
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 px-4 py-3 text-left shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)] sm:col-span-2">
                  <p className="text-sm text-emerald-700">
                    {"Thực nhận sau tất cả phí"}
                  </p>
                  <p className="text-2xl font-semibold text-emerald-800">
                    {formatMoney(actualDriverEarning)}
                  </p>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-800">
                {
                  "Bạn tạo ra giá trị... nhưng bạn không giữ phần lớn giá trị đó."
                }
              </p>

              <button
                type="button"
                onClick={startGame}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                <RotateCcw className="h-4 w-4" />
                {"Bắt đầu ca mới"}
              </button>
            </section>
          )}
        </main>
      </article>
    </section>
  );
}

export default GamePage;
