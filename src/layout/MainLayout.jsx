import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MainLayout() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-soft-float absolute top-8 left-[6%] h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="animate-soft-float-reverse absolute top-[28%] right-[8%] h-52 w-52 rounded-full bg-sky-300/25 blur-3xl" />
        <div className="animate-soft-float absolute right-[20%] bottom-[10%] h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="animate-soft-float-reverse absolute bottom-[24%] left-[18%] h-40 w-40 rounded-full bg-violet-300/15 blur-3xl" />
      </div>
      <Header />
      <main className="relative z-10 flex-1 px-3 pt-32 pb-6 sm:px-8 lg:px-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
