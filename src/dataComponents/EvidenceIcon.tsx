import { Evidence } from "../datas/Ghosts";
import Image, { type StaticImageData } from 'next/image';
import dotsIcon from "@public/evidences/dots-projector.webp";
import emfIcon from "@public/evidences/emf-reader.webp";
import ultravioletIcon from "@public/evidences/fingerprints.webp";
import orbIcon from "@public/evidences/ghost-orb.webp";
import spiritIcon from "@public/evidences/spirit-box.webp";
import thermoIcon from "@public/evidences/thermometer.webp";
import writingIcon from "@public/evidences/writing-book.webp";

export const evidenceIconMapper: Record<Evidence, StaticImageData> = {
  dots: dotsIcon,
  fingerprints: ultravioletIcon,
  "ghost-orb": orbIcon,
  "freezing-temperatures": thermoIcon,
  "ghost-writing": writingIcon,
  "spirit-box": spiritIcon,
  "emf-5": emfIcon
};

type EvidenceIconProps = {
  evidence: Evidence;
}

export default function EvidenceIcon({ evidence }: EvidenceIconProps) {
  return (
    <Image
      style={{
        cursor: "initial",
        border: "none",
        userSelect: "none"
      }}
      src={evidenceIconMapper[evidence]}
      alt={evidence}
    />
  );
}