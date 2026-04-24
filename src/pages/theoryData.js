import { BarChart3, BrainCircuit, Cpu, HandCoins } from "lucide-react";

export const theorySections = [
  {
    id: "01",
    title: "Lý luận của C. Mác về giá trị thặng dư",
    icon: BrainCircuit,
    iconTone: "bg-emerald-100 text-emerald-700",
    glow: "from-emerald-400/20 via-transparent to-transparent",
    usePopup: true,
    preview:
      "Giải thích nguồn gốc giá trị thặng dư từ vận động tiền tệ thành tư bản.",
  },
  {
    id: "02",
    title: "Tích lũy tư bản",
    icon: HandCoins,
    iconTone: "bg-amber-100 text-amber-700",
    glow: "from-amber-400/20 via-transparent to-transparent",
  },
  {
    id: "03",
    title:
      "Các hình thức biểu hiện của giá trị thặng dư trong nền kinh tế thị trường",
    icon: BarChart3,
    iconTone: "bg-blue-100 text-blue-700",
    glow: "from-blue-400/20 via-transparent to-transparent",
    usePopup: true,
    preview:
      "Tóm tắt các hình thức biểu hiện của giá trị thặng dư trong kinh tế thị trường.",
  },
  {
    id: "04",
    title: "Giá trị thặng dư trong kinh tế số",
    icon: Cpu,
    iconTone: "bg-indigo-100 text-indigo-700",
    glow: "from-indigo-400/20 via-transparent to-transparent",
    usePopup: true,
    preview:
      "Mô phỏng cách giá trị thặng dư vận hành trong nền kinh tế số.",
  },
];

export const reviewChallenges = [
  {
    id: "01",
    title: "Khách đặt xe",
    prompt:
      "Khách nhập điểm đón/đến và hệ thống hiển thị mức giá dự kiến cho cuốc xe.",
  },
  {
    id: "02",
    title: "Nền tảng ghép cuốc",
    prompt:
      "Thuật toán phân bổ cuốc xe cho tài xế phù hợp dựa trên vị trí, điểm đánh giá và tỷ lệ nhận chuyến.",
  },
  {
    id: "03",
    title: "Tài xế thực hiện lao động",
    prompt:
      "Tài xế dùng thời gian, công sức và kỹ năng lái xe để tạo ra dịch vụ thực tế.",
  },
  {
    id: "04",
    title: "Chi phí lao động phát sinh",
    prompt:
      "Trong quá trình chạy xe, tài xế tự gánh các khoản xăng, khấu hao xe, bảo trì và thời gian chờ.",
  },
  {
    id: "05",
    title: "Khách hoàn tất thanh toán",
    prompt:
      "Khi cuốc xe kết thúc, khách thanh toán toàn bộ cước phí theo mức giá ứng dụng hiển thị.",
  },
  {
    id: "06",
    title: "Nền tảng khấu trừ phí",
    prompt:
      "Doanh thu được phân chia: nền tảng giữ phần chiết khấu/phí dịch vụ, tài xế nhận phần còn lại.",
  },
  {
    id: "07",
    title: "Biểu hiện giá trị thặng dư",
    prompt:
      "Phần giá trị tài xế tạo ra nhưng không giữ trọn vẹn cho thấy cách giá trị thặng dư vận hành trong kinh tế số.",
  },
];

export const shuffleChallenges = (items) => {
  if (items.length <= 1) return [...items];

  const hasFixedPosition = (list) =>
    list.some((item, index) => item.id === items[index].id);

  let shuffled = [...items];
  let attempts = 0;

  while (attempts < 80) {
    shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[index],
      ];
    }
    if (!hasFixedPosition(shuffled)) return shuffled;
    attempts += 1;
  }

  return items.map((_, index) => items[(index + 1) % items.length]);
};

export const swapChallengePositions = (items, sourceId, targetId) => {
  if (!sourceId || !targetId || sourceId === targetId) return items;

  const sourceIndex = items.findIndex((item) => item.id === sourceId);
  const targetIndex = items.findIndex((item) => item.id === targetId);
  if (sourceIndex === -1 || targetIndex === -1) return items;

  const next = [...items];
  [next[sourceIndex], next[targetIndex]] = [
    next[targetIndex],
    next[sourceIndex],
  ];
  return next;
};

export const motionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};
