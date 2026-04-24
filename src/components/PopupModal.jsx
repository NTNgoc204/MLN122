import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function PopupModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/55 px-3 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/75 bg-white shadow-[0_20px_48px_rgba(15,42,66,0.28)]"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
          <h3 className="text-xl font-semibold text-slate-800 sm:text-2xl">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:bg-slate-100"
            aria-label={'\u0110\u00f3ng popup'}
          >
            {'\u00d7'}
          </button>
        </header>

        <div className="max-h-[75vh] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">{children}</div>
      </section>
    </div>,
    document.body
  )
}

export default PopupModal
