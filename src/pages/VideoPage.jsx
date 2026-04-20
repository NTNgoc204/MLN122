const videoData = {
  title: 'Video thuy\u1ebft tr\u00ecnh',
  subtitle: 'N\u1ed9i dung minh h\u1ecda cho ch\u1ee7 \u0111\u1ec1 Gi\u00e1 tr\u1ecb th\u1eb7ng d\u01b0 \u0026 Kinh t\u1ebf s\u1ed1.',
}

function VideoPage() {
  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl">{videoData.title}</h1>
        <p className="mt-2 text-lg text-slate-600 sm:text-xl">{videoData.subtitle}</p>
      </header>

      <article className="mx-auto max-w-5xl rounded-2xl border border-white/70 bg-white/70 p-5 shadow-[0_10px_24px_rgba(13,55,89,0.1)] backdrop-blur-md sm:p-6">
        <div className="aspect-video rounded-xl border border-slate-200 bg-linear-to-br from-cyan-100 via-sky-100 to-emerald-100" />
      </article>
    </section>
  )
}

export default VideoPage
