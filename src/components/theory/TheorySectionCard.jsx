import { createElement } from "react";
import SectionOneContent from "./SectionOneContent";
import SectionFourContent from "./SectionFourContent";
import SectionThreeContent from "./SectionThreeContent";
import SectionTwoContent from "./SectionTwoContent";
import SectionPlaceholder from "./SectionPlaceholder";
import TheoryContentPopup from "./TheoryContentPopup";

function renderSectionContent(sectionId, sectionTitle) {
  if (sectionId === "01") return <SectionOneContent />;
  if (sectionId === "02") return <SectionTwoContent />;
  if (sectionId === "03") return <SectionThreeContent />;
  if (sectionId === "04") return <SectionFourContent />;
  return <SectionPlaceholder title={sectionTitle} />;
}

function TheorySectionCard({ section, index, MotionArticle, motionVariant }) {
  const Icon = section.icon;
  const content = renderSectionContent(section.id, section.title);
  const popupTitle = `Phần ${section.id}: ${section.title}`;
  const defaultPreview =
    "Nội dung phần này khá dài. Bấm Xem chi tiết để mở popup.";

  return createElement(
    MotionArticle,
    {
      key: section.id,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.05 },
      variants: motionVariant,
      transition: {
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
      className:
        "group relative overflow-hidden rounded-[30px] bg-white/80 p-5 shadow-[0_14px_32px_rgba(13,55,89,0.11)] backdrop-blur-md sm:p-7",
    },
    <>
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${section.glow}`}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-4 flex items-center gap-4">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${section.iconTone}`}
            aria-hidden="true"
          >
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <span className="text-sm font-bold text-slate-400">
              Phần {section.id}
            </span>
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              {section.title}
            </h2>
          </div>
        </div>

        {section.usePopup ? (
          <TheoryContentPopup
            title={popupTitle}
            preview={section.preview ?? defaultPreview}
          >
            {content}
          </TheoryContentPopup>
        ) : (
          content
        )}
      </div>
    </>
  );
}

export default TheorySectionCard;
