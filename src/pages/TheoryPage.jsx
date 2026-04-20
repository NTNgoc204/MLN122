import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, BrainCircuit, CheckCircle2, CircleDollarSign, Cpu, GripVertical, HandCoins, RotateCcw } from 'lucide-react'

const theorySections = [
  {
    order: '01',
    title: 'Gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 l\u00e0 g\u00ec?',
    summary: 'Ph\u1ea7n gi\u00e1 tr\u1ecb do ng\u01b0\u1eddi lao \u0111\u1ed9ng t\u1ea1o ra nh\u01b0ng kh\u00f4ng \u0111\u01b0\u1ee3c tr\u1ea3 c\u00f4ng \u0111\u1ea7y \u0111\u1ee7.',
    image: '/image/theory-01.svg',
    alt: 'Minh hoa ve gia tri thang du va dong gia tri',
    icon: CircleDollarSign,
    glow: 'from-teal-200/75 via-cyan-100/45 to-transparent',
    iconTone: 'bg-teal-100/90 text-teal-700',
    quoteTone: 'from-teal-50 to-cyan-50',
    perspective:
      'Theo quan \u0111i\u1ec3m Karl Marx, gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 l\u00e0 ph\u1ea7n gi\u00e1 tr\u1ecb m\u1edbi v\u01b0\u1ee3t qu\u00e1 gi\u00e1 tr\u1ecb s\u1ee9c lao \u0111\u1ed9ng m\u00e0 nh\u00e0 t\u01b0 b\u1ea3n \u0111\u00e3 tr\u1ea3.',
    quote: 'Gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 l\u00e0 lao \u0111\u1ed9ng kh\u00f4ng c\u00f4ng c\u1ee7a c\u00f4ng nh\u00e2n.',
    explain:
      'N\u00f3i d\u1ec5 hi\u1ec3u: ng\u01b0\u1eddi lao \u0111\u1ed9ng t\u1ea1o ra nhi\u1ec1u gi\u00e1 tr\u1ecb h\u01a1n m\u1ee9c l\u01b0\u01a1ng nh\u1eadn \u0111\u01b0\u1ee3c. Ph\u1ea7n ch\u00eanh l\u1ec7ch \u0111\u00f3 tr\u1edf th\u00e0nh l\u1ee3i \u00edch c\u1ee7a ch\u1ee7 s\u1edf h\u1eefu.',
    example:
      'T\u00e0i x\u1ebf Grab t\u1ea1o doanh thu c\u1ea3 ng\u00e0y, nh\u01b0ng thu nh\u1eadp sau chi\u1ebft kh\u1ea5u, th\u01b0\u1edfng-ph\u1ea1t v\u00e0 chi ph\u00ed x\u0103ng xe c\u00f3 th\u1ec3 th\u1ea5p h\u01a1n nhi\u1ec1u so v\u1edbi gi\u00e1 tr\u1ecb h\u1ecd t\u1ea1o ra.',
    conclusion: 'Ng\u01b0\u1eddi t\u1ea1o gi\u00e1 tr\u1ecb kh\u00f4ng \u0111\u1ed3ng ngh\u0129a v\u1edbi ng\u01b0\u1eddi n\u1eafm gi\u1eef ph\u1ea7n gi\u00e1 tr\u1ecb \u0111\u00f3.',
  },
  {
    order: '02',
    title: 'Ngu\u1ed3n g\u1ed1c c\u1ee7a gi\u00e1 tr\u1ecb',
    summary: 'Lao \u0111\u1ed9ng l\u00e0 ngu\u1ed3n g\u1ed1c c\u1ee7a gi\u00e1 tr\u1ecb; c\u00f4ng ngh\u1ec7 khu\u1ebfch \u0111\u1ea1i n\u0103ng su\u1ea5t ch\u1ee9 kh\u00f4ng t\u1ef1 sinh gi\u00e1 tr\u1ecb.',
    image: '/image/theory-02.svg',
    alt: 'Minh hoa nguon goc gia tri va du lieu',
    icon: Cpu,
    glow: 'from-amber-200/80 via-orange-100/45 to-transparent',
    iconTone: 'bg-amber-100/90 text-amber-700',
    quoteTone: 'from-amber-50 to-orange-50',
    perspective:
      'Marx cho r\u1eb1ng gi\u00e1 tr\u1ecb h\u00e0ng h\u00f3a \u0111\u01b0\u1ee3c quy\u1ebft \u0111\u1ecbnh b\u1edfi th\u1eddi gian lao \u0111\u1ed9ng x\u00e3 h\u1ed9i c\u1ea7n thi\u1ebft. T\u01b0 li\u1ec7u s\u1ea3n xu\u1ea5t ch\u1ec9 chuy\u1ec3n d\u1ecbch gi\u00e1 tr\u1ecb c\u0169.',
    quote: 'Lao \u0111\u1ed9ng s\u1ed1ng l\u00e0 ngu\u1ed3n duy nh\u1ea5t t\u1ea1o ra gi\u00e1 tr\u1ecb m\u1edbi.',
    explain:
      'C\u00f4ng ngh\u1ec7 c\u00f3 th\u1ec3 gi\u00fap l\u00e0m nhanh h\u01a1n, r\u1ebb h\u01a1n; nh\u01b0ng n\u1ebfu kh\u00f4ng c\u00f3 lao \u0111\u1ed9ng c\u1ee7a con ng\u01b0\u1eddi, gi\u00e1 tr\u1ecb m\u1edbi kh\u00f4ng xu\u1ea5t hi\u1ec7n.',
    example:
      'Tr\u00ean Shopee, gi\u00e1 tr\u1ecb \u0111\u1ebfn t\u1eeb ng\u01b0\u1eddi b\u00e1n ch\u1ee5p \u1ea3nh, vi\u1ebft m\u00f4 t\u1ea3, \u0111\u00f3ng g\u00f3i, shipper giao h\u00e0ng v\u00e0 \u0111\u1ed9i kho v\u1eadn h\u00e0nh.',
    conclusion: 'Kinh t\u1ebf s\u1ed1 l\u00e0m thay \u0111\u1ed5i c\u00f4ng c\u1ee5 lao \u0111\u1ed9ng, nh\u01b0ng kh\u00f4ng thay \u0111\u1ed5i vai tr\u00f2 g\u1ed1c c\u1ee7a lao \u0111\u1ed9ng.',
  },
  {
    order: '03',
    title: 'L\u1ee3i nhu\u1eadn th\u1ef1c ch\u1ea5t l\u00e0 g\u00ec?',
    summary: 'L\u1ee3i nhu\u1eadn l\u00e0 h\u00ecnh th\u1ee9c bi\u1ec3u hi\u1ec7n c\u1ee7a gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 tr\u00ean b\u1ec1 m\u1eb7t th\u1ecb tr\u01b0\u1eddng.',
    image: '/image/theory-03.svg',
    alt: 'Minh hoa loi nhuan va su phan bo gia tri',
    icon: HandCoins,
    glow: 'from-sky-200/80 via-blue-100/45 to-transparent',
    iconTone: 'bg-sky-100/90 text-sky-700',
    quoteTone: 'from-sky-50 to-blue-50',
    perspective:
      'Theo Marx, l\u1ee3i nhu\u1eadn kh\u00f4ng ph\u1ea3i t\u1ef1 nhi\u00ean sinh ra t\u1eeb v\u1ed1n. N\u00f3 l\u00e0 k\u1ebft qu\u1ea3 c\u1ee7a ph\u1ea7n gi\u00e1 tr\u1ecb do lao \u0111\u1ed9ng t\u1ea1o ra nh\u01b0ng b\u1ecb chi\u1ebfm h\u1eefu.',
    quote: 'L\u1ee3i nhu\u1eadn l\u00e0 h\u00ecnh th\u00e1i chuy\u1ec3n h\u00f3a c\u1ee7a gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0.',
    explain:
      'Ta th\u01b0\u1eddng th\u1ea5y doanh nghi\u1ec7p l\u00e3i do kinh doanh t\u1ed1t, nh\u01b0ng \u00edt th\u1ea5y r\u1eb1ng ph\u1ea7n l\u00e3i \u0111\u00f3 g\u1eafn ch\u1eb7t v\u1edbi c\u00e1ch ph\u00e2n chia gi\u00e1 tr\u1ecb gi\u1eefa lao \u0111\u1ed9ng v\u00e0 v\u1ed1n.',
    example:
      'N\u1ec1n t\u1ea3ng freelancer thu ph\u00ed trung gian tr\u00ean m\u1ed7i d\u1ef1 \u00e1n, trong khi ng\u01b0\u1eddi l\u00e0m ph\u1ea3i c\u1ea1nh tranh gi\u00e1 v\u00e0 t\u1ef1 g\u00e1nh nhi\u1ec1u chi ph\u00ed \u1ea9n.',
    conclusion: 'Hi\u1ec3u b\u1ea3n ch\u1ea5t l\u1ee3i nhu\u1eadn gi\u00fap ta nh\u00ecn r\u00f5 h\u01a1n quan h\u1ec7 quy\u1ec1n l\u1ef1c trong kinh t\u1ebf s\u1ed1.',
  },
  {
    order: '04',
    title: 'Gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 \u0111\u01b0\u1ee3c t\u1ea1o ra nh\u01b0 th\u1ebf n\u00e0o?',
    summary: 'Hai c\u01a1 ch\u1ebf ch\u00ednh: th\u1eb7ng d\u01b0 tuy\u1ec7t \u0111\u1ed1i v\u00e0 th\u1eb7ng d\u01b0 t\u01b0\u01a1ng \u0111\u1ed1i.',
    image: '/image/theory-04.svg',
    alt: 'Minh hoa co che tao gia tri thang du',
    icon: BrainCircuit,
    glow: 'from-lime-200/80 via-emerald-100/45 to-transparent',
    iconTone: 'bg-lime-100/90 text-lime-700',
    quoteTone: 'from-lime-50 to-emerald-50',
    perspective:
      'T\u01b0 b\u1ea3n m\u1edf r\u1ed9ng th\u1eb7ng d\u01b0 b\u1eb1ng c\u00e1ch k\u00e9o d\u00e0i th\u1eddi gian lao \u0111\u1ed9ng ho\u1eb7c t\u0103ng n\u0103ng su\u1ea5t \u0111\u1ec3 r\u00fat ng\u1eafn lao \u0111\u1ed9ng t\u1ea5t y\u1ebfu.',
    quote: 'M\u1ee5c ti\u00eau c\u1ee7a t\u01b0 b\u1ea3n l\u00e0 kh\u00f4ng ng\u1eebng m\u1edf r\u1ed9ng lao \u0111\u1ed9ng th\u1eb7ng d\u01b0.',
    explain:
      'Ho\u1eb7c b\u1ea1n l\u00e0m l\u00e2u h\u01a1n (th\u1eb7ng d\u01b0 tuy\u1ec7t \u0111\u1ed1i), ho\u1eb7c b\u1ea1n l\u00e0m nhanh h\u01a1n nh\u1edd c\u00f4ng ngh\u1ec7 (th\u1eb7ng d\u01b0 t\u01b0\u01a1ng \u0111\u1ed1i).',
    example:
      'T\u00e0i x\u1ebf app ch\u1ea1y th\u00eam gi\u1edd cao \u0111i\u1ec3m l\u00e0 d\u1ea1ng th\u1ee9 nh\u1ea5t; freelancer d\u00f9ng AI t\u0103ng t\u1ed1c nh\u01b0ng kh\u00f4ng t\u0103ng \u0111\u01a1n gi\u00e1 l\u00e0 d\u1ea1ng th\u1ee9 hai.',
    conclusion:
      'C\u00f9ng m\u1ed9t c\u00f4ng ngh\u1ec7 c\u00f3 th\u1ec3 t\u0103ng t\u1ef1 do lao \u0111\u1ed9ng ho\u1eb7c t\u0103ng khai th\u00e1c lao \u0111\u1ed9ng, t\u00f9y c\u00e1ch ph\u00e2n ph\u1ed1i.',
    mechanisms: [
      {
        name: 'Th\u1eb7ng d\u01b0 tuy\u1ec7t \u0111\u1ed1i',
        detail: 'T\u0103ng gi\u1edd l\u00e0m, t\u0103ng c\u01b0\u1eddng \u0111\u1ed9 lao \u0111\u1ed9ng, t\u1eeb \u0111\u00f3 m\u1edf r\u1ed9ng ph\u1ea7n lao \u0111\u1ed9ng kh\u00f4ng \u0111\u01b0\u1ee3c tr\u1ea3 c\u00f4ng.',
      },
      {
        name: 'Th\u1eb7ng d\u01b0 t\u01b0\u01a1ng \u0111\u1ed1i',
        detail:
          'T\u0103ng n\u0103ng su\u1ea5t nh\u1edd t\u1ed5 ch\u1ee9c/c\u00f4ng ngh\u1ec7 \u0111\u1ec3 r\u00fat ng\u1eafn th\u1eddi gian lao \u0111\u1ed9ng t\u1ea5t y\u1ebfu, qua \u0111\u00f3 t\u0103ng lao \u0111\u1ed9ng th\u1eb7ng d\u01b0.',
      },
    ],
  },
  {
    order: '05',
    title: 'Gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 trong kinh t\u1ebf s\u1ed1',
    summary:
      'N\u1ec1n t\u1ea3ng s\u1ed1 t\u00e1i t\u1ed5 ch\u1ee9c c\u00e1ch t\u1ea1o v\u00e0 thu gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 qua d\u1eef li\u1ec7u, thu\u1eadt to\u00e1n v\u00e0 ph\u00ed d\u1ecbch v\u1ee5.',
    image: '/image/theory-05.svg',
    alt: 'Minh hoa gia tri thang du trong kinh te so',
    icon: BarChart3,
    glow: 'from-rose-200/80 via-pink-100/45 to-transparent',
    iconTone: 'bg-rose-100/90 text-rose-700',
    quoteTone: 'from-rose-50 to-pink-50',
    perspective:
      'Trong kinh t\u1ebf s\u1ed1, doanh nghi\u1ec7p n\u1ec1n t\u1ea3ng v\u1eeba l\u00e0 th\u1ecb tr\u01b0\u1eddng, v\u1eeba l\u00e0 b\u1ed9 m\u00e1y \u0111i\u1ec1u ph\u1ed1i lao \u0111\u1ed9ng. Quy\u1ec1n ki\u1ec3m so\u00e1t d\u1eef li\u1ec7u l\u00e0 l\u1ee3i th\u1ebf c\u1ed1t l\u00f5i.',
    quote: 'Ai ki\u1ec3m so\u00e1t \u0111i\u1ec1u ki\u1ec7n s\u1ea3n xu\u1ea5t th\u01b0\u1eddng c\u0169ng ki\u1ec3m so\u00e1t ph\u00e2n ph\u1ed1i gi\u00e1 tr\u1ecb.',
    explain:
      'Ng\u01b0\u1eddi lao \u0111\u1ed9ng c\u00f3 v\u1ebb t\u1ef1 do nh\u1eadn vi\u1ec7c, nh\u01b0ng gi\u00e1 hi\u1ec3n th\u1ecb, m\u1ee9c ph\u00ed, \u0111\u1ed9 ti\u1ebfp c\u1eadn kh\u00e1ch h\u00e0ng \u0111\u1ec1u do n\u1ec1n t\u1ea3ng \u0111\u1eb7t ra.',
    example:
      'Grab ph\u00e2n cu\u1ed1c b\u1eb1ng thu\u1eadt to\u00e1n, Shopee \u0111i\u1ec1u ti\u1ebft hi\u1ec3n th\u1ecb qua qu\u1ea3ng c\u00e1o v\u00e0 ph\u00ed s\u00e0n, freelancer platforms thu ph\u00ed trung gian tr\u00ean t\u1eebng h\u1ee3p \u0111\u1ed3ng.',
    conclusion: 'Kinh t\u1ebf s\u1ed1 l\u00e0m quan h\u1ec7 gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 tr\u1edf n\u00ean tinh vi h\u01a1n, nh\u01b0ng kh\u00f4ng bi\u1ebfn m\u1ea5t.',
  },
]

const reviewChallenges = [
  {
    id: '01',
    title: 'Kh\u00e1ch \u0111\u1eb7t xe',
    prompt:
      'Kh\u00e1ch nh\u1eadp \u0111i\u1ec3m \u0111\u00f3n/\u0111\u1ebfn v\u00e0 h\u1ec7 th\u1ed1ng hi\u1ec3n th\u1ecb m\u1ee9c gi\u00e1 d\u1ef1 ki\u1ebfn cho cu\u1ed1c xe.',
  },
  {
    id: '02',
    title: 'N\u1ec1n t\u1ea3ng gh\u00e9p cu\u1ed1c',
    prompt:
      'Thu\u1eadt to\u00e1n ph\u00e2n b\u1ed5 cu\u1ed1c xe cho t\u00e0i x\u1ebf ph\u00f9 h\u1ee3p d\u1ef1a tr\u00ean v\u1ecb tr\u00ed, \u0111i\u1ec3m \u0111\u00e1nh gi\u00e1 v\u00e0 t\u1ef7 l\u1ec7 nh\u1eadn chuy\u1ebfn.',
  },
  {
    id: '03',
    title: 'T\u00e0i x\u1ebf th\u1ef1c hi\u1ec7n lao \u0111\u1ed9ng',
    prompt:
      'T\u00e0i x\u1ebf d\u00f9ng th\u1eddi gian, c\u00f4ng s\u1ee9c v\u00e0 k\u1ef9 n\u0103ng l\u00e1i xe \u0111\u1ec3 t\u1ea1o ra d\u1ecbch v\u1ee5 th\u1ef1c t\u1ebf.',
  },
  {
    id: '04',
    title: 'Chi ph\u00ed lao \u0111\u1ed9ng ph\u00e1t sinh',
    prompt:
      'Trong qu\u00e1 tr\u00ecnh ch\u1ea1y xe, t\u00e0i x\u1ebf t\u1ef1 g\u00e1nh c\u00e1c kho\u1ea3n x\u0103ng, kh\u1ea5u hao xe, b\u1ea3o tr\u00ec v\u00e0 th\u1eddi gian ch\u1edd.',
  },
  {
    id: '05',
    title: 'Kh\u00e1ch ho\u00e0n t\u1ea5t thanh to\u00e1n',
    prompt:
      'Khi cu\u1ed1c xe k\u1ebft th\u00fac, kh\u00e1ch thanh to\u00e1n to\u00e0n b\u1ed9 c\u01b0\u1edbc ph\u00ed theo m\u1ee9c gi\u00e1 \u1ee9ng d\u1ee5ng hi\u1ec3n th\u1ecb.',
  },
  {
    id: '06',
    title: 'N\u1ec1n t\u1ea3ng kh\u1ea5u tr\u1eeb ph\u00ed',
    prompt:
      'Doanh thu \u0111\u01b0\u1ee3c ph\u00e2n chia: n\u1ec1n t\u1ea3ng gi\u1eef ph\u1ea7n chi\u1ebft kh\u1ea5u/ph\u00ed d\u1ecbch v\u1ee5, t\u00e0i x\u1ebf nh\u1eadn ph\u1ea7n c\u00f2n l\u1ea1i.',
  },
  {
    id: '07',
    title: 'Bi\u1ec3u hi\u1ec7n gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0',
    prompt:
      'Ph\u1ea7n gi\u00e1 tr\u1ecb t\u00e0i x\u1ebf t\u1ea1o ra nh\u01b0ng kh\u00f4ng gi\u1eef tr\u1ecdn v\u1eb9n cho th\u1ea5y c\u00e1ch gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 v\u1eadn h\u00e0nh trong kinh t\u1ebf s\u1ed1.',
  },
]

const shuffleChallenges = (items) => {
  if (items.length <= 1) {
    return [...items]
  }

  const hasFixedPosition = (list) => list.some((item, index) => item.id === items[index].id)

  let shuffled = [...items]
  let attempts = 0

  while (attempts < 80) {
    shuffled = [...items]

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
    }

    if (!hasFixedPosition(shuffled)) {
      return shuffled
    }

    attempts += 1
  }

  // Guaranteed fallback: rotate one step so no card stays in original position.
  return items.map((_, index) => items[(index + 1) % items.length])
}

const swapChallengePositions = (items, sourceId, targetId) => {
  if (!sourceId || !targetId || sourceId === targetId) {
    return items
  }

  const sourceIndex = items.findIndex((item) => item.id === sourceId)
  const targetIndex = items.findIndex((item) => item.id === targetId)

  if (sourceIndex === -1 || targetIndex === -1) {
    return items
  }

  const next = [...items]
  ;[next[sourceIndex], next[targetIndex]] = [next[targetIndex], next[sourceIndex]]

  return next
}

const motionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function TheoryPage() {
  const MotionHeader = motion.header
  const MotionSection = motion.section
  const MotionArticle = motion.article
  const expectedChallengeIds = reviewChallenges.map((item) => item.id)
  const [challengeOrder, setChallengeOrder] = useState(() => shuffleChallenges(reviewChallenges))
  const [draggedChallengeId, setDraggedChallengeId] = useState(null)
  const [dragOverChallengeId, setDragOverChallengeId] = useState(null)

  const handleChallengeDragStart = (event, challengeId) => {
    setDraggedChallengeId(challengeId)
    setDragOverChallengeId(challengeId)
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', challengeId)
  }

  const handleChallengeDragOver = (event, challengeId) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    if (dragOverChallengeId !== challengeId) {
      setDragOverChallengeId(challengeId)
    }
  }

  const handleChallengeDrop = (event, targetChallengeId) => {
    event.preventDefault()
    const sourceChallengeId = draggedChallengeId || event.dataTransfer.getData('text/plain')

    setChallengeOrder((prev) => swapChallengePositions(prev, sourceChallengeId, targetChallengeId))
    setDraggedChallengeId(null)
    setDragOverChallengeId(null)
  }

  const handleChallengeDragEnd = () => {
    setDraggedChallengeId(null)
    setDragOverChallengeId(null)
  }

  const resetChallengeOrder = () => {
    setChallengeOrder(shuffleChallenges(reviewChallenges))
    setDraggedChallengeId(null)
    setDragOverChallengeId(null)
  }

  const isCorrectPosition = (challenge, index) => challenge.id === expectedChallengeIds[index]
  const sequentiallyCorrectByIndex = challengeOrder.reduce((result, challenge, index) => {
    const currentCorrect = isCorrectPosition(challenge, index)
    const previousSequentiallyCorrect = index === 0 ? true : result[index - 1]

    result.push(currentCorrect && previousSequentiallyCorrect)
    return result
  }, [])
  const isChallengeSolved = challengeOrder.every((challenge, index) => isCorrectPosition(challenge, index))

  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2">
      <MotionHeader
        initial="hidden"
        animate="visible"
        variants={motionVariant}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">{'Theory Studio'}</p>
        <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl lg:text-6xl">{'L\u00fd thuy\u1ebft'}</h1>
        <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-2xl">
          {'T\u1eeb quan \u0111i\u1ec3m c\u1ee7a Karl Marx \u0111\u1ebfn bi\u1ec3u hi\u1ec7n trong n\u1ec1n kinh t\u1ebf s\u1ed1.'}
        </p>
      </MotionHeader>

      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={motionVariant}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative mb-10 overflow-hidden rounded-[34px] bg-linear-to-br from-emerald-50 via-slate-50 to-sky-50 p-4 shadow-[0_20px_50px_rgba(15,42,66,0.14)] sm:p-7"
      >
        <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-emerald-200/45 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-10 -right-8 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-3 text-left">
            <p className="inline-flex w-fit items-center rounded-full bg-white/75 px-4 py-1 text-sm font-semibold text-emerald-700">
              {'Gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 \u0026 Kinh t\u1ebf s\u1ed1'}
            </p>
            <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">
              {'Khung l\u00fd thuy\u1ebft c\u1ed1t l\u00f5i cho b\u00e0i thuy\u1ebft tr\u00ecnh'}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {
                'Trang n\u00e0y h\u1ec7 th\u1ed1ng h\u00f3a 5 tr\u1ee5c n\u1ed9i dung quan tr\u1ecdng, chuy\u1ec3n t\u1eeb kh\u00e1i ni\u1ec7m kinh \u0111i\u1ec3n \u0111\u1ebfn b\u1ed1i c\u1ea3nh n\u1ec1n t\u1ea3ng s\u1ed1 hi\u1ec7n nay.'
              }
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-white/80 p-2 shadow-[0_12px_28px_rgba(15,42,66,0.14)]">
            <img src="/image/theory-cover.svg" alt="Theory cover" className="h-full w-full rounded-3xl object-cover" />
          </div>
        </div>
      </MotionSection>

      <div className="space-y-8">
        {theorySections.map((section, index) => {
          const Icon = section.icon

          return (
            <MotionArticle
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={motionVariant}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[30px] bg-white/82 p-5 shadow-[0_14px_32px_rgba(13,55,89,0.11)] backdrop-blur-md sm:p-6"
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-r ${section.glow}`} aria-hidden="true" />

              <div className="relative grid gap-5 xl:grid-cols-[280px_1fr] xl:items-start">
                <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52 xl:h-60"
                  />
                  <span className="absolute left-4 top-4 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-white/90 px-2 text-sm font-bold text-slate-700 shadow-sm">
                    {section.order}
                  </span>
                  <span
                    className={`absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ${section.iconTone}`}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">{section.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">{section.summary}</p>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <section className="rounded-2xl bg-slate-50/85 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.06)]">
                      <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{'Quan \u0111i\u1ec3m'}</h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-700">{section.perspective}</p>
                    </section>

                    <section className={`rounded-2xl bg-linear-to-r ${section.quoteTone} px-4 py-3 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.06)]`}>
                      <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{'Tr\u00edch d\u1eabn'}</h3>
                      <p className="mt-2 text-base leading-relaxed italic text-slate-800">{`"${section.quote}"`}</p>
                    </section>

                    <section className="rounded-2xl bg-slate-50/85 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.06)]">
                      <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{'Gi\u1ea3i th\u00edch d\u1ec5 hi\u1ec3u'}</h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-700">{section.explain}</p>
                    </section>

                    <section className="rounded-2xl bg-slate-50/85 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.06)]">
                      <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{'V\u00ed d\u1ee5 th\u1ef1c t\u1ebf'}</h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-700">{section.example}</p>
                    </section>
                  </div>

                  {section.mechanisms && (
                    <section className="mt-4 rounded-2xl bg-white/85 px-4 py-4 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.07)]">
                      <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{'Hai c\u01a1 ch\u1ebf ch\u00ednh'}</h3>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {section.mechanisms.map((item) => (
                          <div key={item.name} className="rounded-xl bg-emerald-50/55 px-3 py-2.5">
                            <p className="font-semibold text-slate-800">{item.name}</p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  <section className="mt-4 rounded-2xl bg-white/90 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.07)]">
                    <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{'K\u1ebft lu\u1eadn'}</h3>
                    <p className="mt-2 text-base font-medium leading-relaxed text-slate-800">{section.conclusion}</p>
                  </section>

                </div>
              </div>
            </MotionArticle>
          )
        })}
      </div>

      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={motionVariant}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mt-10 rounded-[30px] bg-white/84 p-5 shadow-[0_16px_34px_rgba(13,55,89,0.11)] sm:p-7"
      >
        <div className="mb-5 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 uppercase">
            {'Th\u1eed th\u00e1ch \u00d4n t\u1eadp'}
          </span>
          <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">{'Chu\u1ed7i gi\u00e1 tr\u1ecb trong m\u1ed9t cu\u1ed1c Grab gi\u1edd cao \u0111i\u1ec3m'}</h2>
        </div>
        <p className="mx-auto mb-5 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          {
            'V\u00ed d\u1ee5 \u00f4n t\u1eadp: m\u1ed9t cu\u1ed1c xe Grab gi\u1edd cao \u0111i\u1ec3m, th\u1ec3 hi\u1ec7n qu\u00e1 tr\u00ecnh t\u1ea1o ra v\u00e0 ph\u00e2n ph\u1ed1i gi\u00e1 tr\u1ecb trong kinh t\u1ebf s\u1ed1.'
          }
        </p>

        <div className="space-y-3">
          {challengeOrder.map((challenge, index) => {
            const showCorrectTick = sequentiallyCorrectByIndex[index]
            const isDropTarget = dragOverChallengeId === challenge.id && draggedChallengeId !== challenge.id
            const displayPosition = index + 1

            return (
              <article
                key={challenge.id}
                draggable
                onDragStart={(event) => handleChallengeDragStart(event, challenge.id)}
                onDragOver={(event) => handleChallengeDragOver(event, challenge.id)}
                onDrop={(event) => handleChallengeDrop(event, challenge.id)}
                onDragEnd={handleChallengeDragEnd}
                className={`cursor-grab rounded-2xl px-4 py-4 active:cursor-grabbing ${
                  showCorrectTick
                    ? 'bg-emerald-50/90 shadow-[inset_0_0_0_1px_rgba(5,150,105,0.25)]'
                    : 'bg-slate-50/90 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)]'
                } ${isDropTarget ? 'ring-2 ring-indigo-400' : ''}`}
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-indigo-600 px-2 text-xs font-bold text-white">
                      {displayPosition}
                    </span>
                    <h3 className="text-base font-semibold text-slate-800">{challenge.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {showCorrectTick && (
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                    )}
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700"
                      aria-label="Keo tha de sap xep"
                    >
                      <GripVertical className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{challenge.prompt}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={resetChallengeOrder}
            className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            <RotateCcw className="h-4 w-4" />
            {'Tr\u1ed9n l\u1ea1i'}
          </button>

          {isChallengeSolved && (
            <p className="text-sm font-semibold text-emerald-700">{'\u0110\u00fang r\u1ed3i! B\u1ea1n \u0111\u00e3 s\u1eafp x\u1ebfp ch\u00ednh x\u00e1c th\u1ee9 t\u1ef1.'}</p>
          )}
          {!isChallengeSolved && (
            <p className="text-sm font-semibold text-slate-600">
              {'S\u1eafp x\u1ebfp \u0111\u00fang tr\u00ecnh t\u1ef1 s\u1ebd gi\u00fap nh\u00ecn r\u00f5 chu\u1ed7i gi\u00e1 tr\u1ecb trong v\u00ed d\u1ee5 n\u00e0y.'}
            </p>
          )}
        </div>
      </MotionSection>
    </section>
  )
}

export default TheoryPage
