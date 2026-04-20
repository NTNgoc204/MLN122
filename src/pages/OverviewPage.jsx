import { SiDeepmind, SiGooglegemini, SiNotebooklm, SiOpenai } from 'react-icons/si'

const overviewData = {
  title: 'Gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 & Kinh t\u1ebf s\u1ed1',
  subtitle: 'Ai th\u1ef1c s\u1ef1 h\u01b0\u1edfng l\u1ee3i trong n\u1ec1n kinh t\u1ebf s\u1ed1?',
  lecturer: 'Gi\u1ea3ng vi\u00ean h\u01b0\u1edbng d\u1eabn: Ho\u00e0ng Th\u1eafng',
  members: [
    'Nguy\u1ec5n Nam Th\u1ecbnh - SE182156',
    'L\u01b0\u01a1ng Nguy\u1ec5n Duy Khang - SE193897',
    'Nguy\u1ec5n Th\u00e0nh Ng\u1ecdc - SE180279',
  ],
  presentation: [
    'Kh\u00e1i ni\u1ec7m gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 trong b\u1ed1i c\u1ea3nh s\u1ed1.',
    'Ai t\u1ea1o ra gi\u00e1 tr\u1ecb, ai n\u1eafm gi\u1eef l\u1ee3i \u00edch trong n\u1ec1n t\u1ea3ng s\u1ed1.',
    'Vai tr\u00f2 c\u1ee7a d\u1eef li\u1ec7u, n\u1ec1n t\u1ea3ng v\u00e0 lao \u0111\u1ed9ng s\u1ed1.',
    '\u0110\u1ec1 xu\u1ea5t g\u00f3c nh\u00ecn c\u00f4ng b\u1eb1ng h\u01a1n trong ph\u00e2n ph\u1ed1i gi\u00e1 tr\u1ecb.',
  ],
  tools: [
    {
      name: 'ChatGPT',
      subtitle: 'D\u00f9ng \u0111\u1ec3 vibe coding v\u00e0 t\u00ecm hi\u1ec3u n\u1ed9i dung.',
      icon: SiOpenai,
      iconClass: 'from-emerald-500 to-green-500',
    },
    {
      name: 'NotebookLM',
      subtitle: 'D\u00f9ng \u0111\u1ec3 t\u1ea1o video.',
      icon: SiNotebooklm,
      iconClass: 'from-sky-500 to-cyan-500',
    },
    {
      name: 'Gemini',
      subtitle: 'D\u00f9ng \u0111\u1ec3 t\u1ea1o \u1ea3nh.',
      icon: SiGooglegemini,
      iconClass: 'from-violet-500 to-indigo-500',
    },
    {
      name: 'DeepSeek',
      subtitle: 'D\u00f9ng \u0111\u1ec3 t\u00ecm hi\u1ec3u n\u1ed9i dung.',
      icon: SiDeepmind,
      iconClass: 'from-amber-500 to-orange-500',
    },
  ],
}

function OverviewPage() {
  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2">
      <header className="animate-fade-up animate-fade-up-delay-1 mb-11 text-center">
        <h1 className="mb-3 text-4xl leading-tight font-semibold sm:text-5xl lg:text-7xl">
          <span className="animate-gradient-shift bg-linear-to-r from-slate-800 via-cyan-800 to-slate-800 bg-clip-text text-transparent">
            {overviewData.title}
          </span>
        </h1>
        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-600 sm:text-2xl">
          {overviewData.subtitle}
        </p>
        <p className="mt-4 inline-flex rounded-full border border-cyan-700/20 bg-white/70 px-4 py-2 text-base font-semibold text-cyan-800 backdrop-blur-sm sm:text-xl">
          {overviewData.lecturer}
        </p>
      </header>

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="animate-fade-up animate-fade-up-delay-2 rounded-3xl border border-white/70 bg-white/60 p-6 shadow-[0_12px_24px_rgba(13,87,129,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(13,87,129,0.2)] sm:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-800 sm:text-3xl">{'Th\u00e0nh vi\u00ean nh\u00f3m'}</h2>
          <ul className="grid grid-cols-1 gap-3">
            {overviewData.members.map((member, index) => (
              <li
                key={member}
                className="group rounded-xl border border-cyan-800/15 bg-white/85 px-4 py-3 text-base font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-600/35 hover:shadow-md hover:shadow-cyan-700/10 sm:text-lg"
              >
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                  {index + 1}
                </span>
                {member}
              </li>
            ))}
          </ul>
        </article>

        <article className="animate-fade-up animate-fade-up-delay-3 rounded-3xl border border-white/70 bg-white/65 p-6 shadow-[0_12px_24px_rgba(13,87,129,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(13,87,129,0.2)] sm:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-800 sm:text-3xl">{'N\u1ed9i dung thuy\u1ebft tr\u00ecnh'}</h2>
          <ul className="space-y-3">
            {overviewData.presentation.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-xl border border-cyan-800/12 bg-white/80 px-4 py-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                  {index + 1}
                </span>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-5">
        <article className="animate-fade-up animate-fade-up-delay-3 rounded-3xl border border-white/70 bg-white/65 p-6 shadow-[0_12px_24px_rgba(13,87,129,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(13,87,129,0.2)] sm:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-800 sm:text-3xl">{'AI h\u1ed7 tr\u1ee3'}</h2>
          <div className="flex gap-4 overflow-x-auto pb-1">
            {overviewData.tools.map((tool) => {
              const Icon = tool.icon

              return (
                <article
                  key={tool.name}
                  className="group min-w-62.5 shrink-0 flex-1 rounded-2xl border border-cyan-900/10 bg-white/90 p-5 text-center shadow-[0_10px_20px_rgba(13,55,89,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-600/25 hover:shadow-[0_16px_28px_rgba(13,55,89,0.16)] md:min-w-0"
                >
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${tool.iconClass} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 sm:text-lg">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{tool.subtitle}</p>
                </article>
              )
            })}
          </div>
        </article>
      </section>
    </section>
  )
}

export default OverviewPage
