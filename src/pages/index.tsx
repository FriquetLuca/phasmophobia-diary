import NeutralCheckbox from "@/components/NeutralCheckbox";
import TableGenerator from "@/components/TableGenerator";
import Image, { ImageProps, StaticImageData } from 'next/image';
import { Box, Heading, Text } from "@chakra-ui/react";
import dotsIcon from "../../public/evidences/dots-projector.webp";
import emfIcon from "../../public/evidences/emf-reader.webp";
import ultravioletIcon from "../../public/evidences/fingerprints.webp";
import orbIcon from "../../public/evidences/ghost-orb.webp";
import spiritIcon from "../../public/evidences/spirit-box.webp";
import thermoIcon from "../../public/evidences/thermometer.webp";
import writingIcon from "../../public/evidences/writing-book.webp";
import { ReactNode } from "react";

type EvidenceTemplateProps = {
  label: ReactNode|string;
  src: StaticImageData | {
    default: StaticImageData;
  };
  alt: string;
}
export default function Home() {
  const evidenceTemplate = ({ label, src, alt}: EvidenceTemplateProps) => {
    return {
      check: <NeutralCheckbox iconStyle={{ size: 20 }}  />,
      image: <Image style={{
        cursor: "initial",
        border: "none",
        userSelect: "none"
      }} src={src} alt={alt} />,
      evidenceLabel: <Text style={{
        cursor: "initial",
        border: "none",
        userSelect: "none"
      }}>{label}</Text>
    };
  };
  return (
    <Box>
      <Heading>Phasmophobia</Heading>
      <Text>The phasmophobia diary</Text>
      <TableGenerator
        headers={[
          { name: "check" },
          { name: "image" },
          { name: "evidenceLabel", label: "Evidences" }
        ]}
        datas={[
          evidenceTemplate({
            label: "D.O.T.S. Projector",
            src: dotsIcon,
            alt: "dots"
          }),
          evidenceTemplate({
            label: "EMF-5",
            src: emfIcon,
            alt: "emf reader"
          }),
          evidenceTemplate({
            label: "Fingerprints",
            src: ultravioletIcon,
            alt: "fingerprints"
          }),
          evidenceTemplate({
            label: "Ghost Orb",
            src: orbIcon,
            alt: "ghost orb"
          }),
          evidenceTemplate({
            label: "Spirit Box",
            src: spiritIcon,
            alt: "spirit box"
          }),
          evidenceTemplate({
            label: "Freezing temperature",
            src: thermoIcon,
            alt: "thermometer"
          }),
          evidenceTemplate({
            label: "Writing Book",
            src: writingIcon,
            alt: "writing book"
          }),
        ]}
      />
      
    </Box>
  )
}
