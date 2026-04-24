import { useState } from "react";
import PopupModal from "../PopupModal";

function TheoryContentPopup({ title, preview, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const maxPreviewLength = 110;
  const normalizedPreview = preview?.trim() ?? "";
  const shortPreview =
    normalizedPreview.length > maxPreviewLength
      ? `${normalizedPreview.slice(0, maxPreviewLength).trimEnd()}...`
      : normalizedPreview;

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          {shortPreview}
        </p>
        <button
          type="button"
          onClick={openPopup}
          className="mt-4 inline-flex items-center rounded-xl border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
        >
          Xem chi tiet
        </button>
      </div>

      <PopupModal isOpen={isOpen} onClose={closePopup} title={title}>
        {isOpen ? children : null}
      </PopupModal>
    </>
  );
}

export default TheoryContentPopup;
