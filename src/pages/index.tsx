import NeutralCheckbox, { type Trilean } from "@/components/NeutralCheckbox";
import TableGenerator from "@/components/TableGenerator";
import { Box, Flex, Text } from "@chakra-ui/react";
import { type ChangeEvent, type ReactNode, useState } from "react";
import { type Evidence, Ghosts, Ghost, GhostProfile } from "@/datas/Ghosts";
import EvidenceIcon from "@/dataComponents/EvidenceIcon";
import { RenderGhostTable } from "@/datas/RenderGhostTable";

type EvidenceTemplateProps = {
  label: ReactNode|string;
  evidence: Evidence;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: Trilean;
}
const stateToEvidence: Record<keyof EvidenceState, Evidence> = {
  "dots": "dots",
  "fingerprints": "fingerprints",
  "orb": "ghost-orb",
  "freezing": "freezing-temperatures",
  "writing": "ghost-writing",
  "spirit": "spirit-box",
  "emf": "emf-5"
};
const evidenceStateToEvidence = (evidence: keyof EvidenceState) => stateToEvidence[evidence];

type EvidenceState = {
  dots: Trilean;
  emf: Trilean;
  fingerprints: Trilean;
  orb: Trilean;
  spirit: Trilean;
  freezing: Trilean;
  writing: Trilean;
}

const evidenceTemplate = ({ label, evidence, onChange, defaultValue }: EvidenceTemplateProps) => {
  return {
    check: <NeutralCheckbox iconStyle={{ size: 20 }} onChange={onChange} defaultValue={defaultValue} />,
    image: <EvidenceIcon evidence={evidence} />,
    evidenceLabel: <Text style={{
      cursor: "initial",
      border: "none",
      userSelect: "none"
    }}>{label}</Text>
  };
};

type GhostMapped = {
  name: Ghost;
  profile: GhostProfile;
};

const remapGhosts = (allGhosts: Record<Ghost, GhostProfile>) => {
  const result: GhostMapped[] = [];
  for(const ghostID in allGhosts) {
    result.push({
      name: ghostID as Ghost,
      profile: allGhosts[ghostID as Ghost]
    });
  }
  return result;
};

const filterGhosts = (allGhosts: GhostMapped[], currentEvidences: EvidenceState) => {
  const included: GhostMapped[] = [];
  const excluded: GhostMapped[] = [];
  // Filter has evidence
  for(const ghost of allGhosts) {
    let hasEvidence = true;
    for(const currentEvidence in currentEvidences) {
      if(currentEvidences[currentEvidence as keyof EvidenceState] === "true") {
        hasEvidence = ghost.profile.evidences.includes(evidenceStateToEvidence(currentEvidence as keyof EvidenceState)) && hasEvidence;
      }
    }
    if(hasEvidence) {
      included.push(ghost);
    } else {
      excluded.push(ghost);
    }
  }
  return [included, excluded];
}

export default function Home() {
  const allGhosts = Ghosts();
  const [ evidenceState, setEvidenceState ] = useState<{
    dots: Trilean;
    emf: Trilean;
    fingerprints: Trilean;
    orb: Trilean;
    spirit: Trilean;
    freezing: Trilean;
    writing: Trilean;
  }>({
    dots: "neutral",
    emf: "neutral",
    fingerprints: "neutral",
    orb: "neutral",
    spirit: "neutral",
    freezing: "neutral",
    writing: "neutral"
  });
  const remappedGhosts = remapGhosts(allGhosts);
  const [ included, excluded ] = filterGhosts(remappedGhosts, evidenceState);

  return (
    <Box>
      <TableGenerator
        headers={[
          { name: "check" },
          { name: "image" },
          { name: "evidenceLabel", label: "Evidences" }
        ]}
        datas={[
          evidenceTemplate({
            label: "D.O.T.S. Projector",
            evidence: "dots",
            onChange: (e) => setEvidenceState({ ...evidenceState, dots: e.target.value as Trilean }),
            defaultValue: evidenceState.dots
          }),
          evidenceTemplate({
            label: "EMF-5",
            evidence: "emf-5",
            onChange: (e) => setEvidenceState({ ...evidenceState, emf: e.target.value as Trilean }),
            defaultValue: evidenceState.emf
          }),
          evidenceTemplate({
            label: "Fingerprints",
            evidence: "fingerprints",
            onChange: (e) => setEvidenceState({ ...evidenceState, fingerprints: e.target.value as Trilean }),
            defaultValue: evidenceState.fingerprints
          }),
          evidenceTemplate({
            label: "Ghost Orb",
            evidence: "ghost-orb",
            onChange: (e) => setEvidenceState({ ...evidenceState, orb: e.target.value as Trilean }),
            defaultValue: evidenceState.orb
          }),
          evidenceTemplate({
            label: "Spirit Box",
            evidence: "spirit-box",
            onChange: (e) => setEvidenceState({ ...evidenceState, spirit: e.target.value as Trilean }),
            defaultValue: evidenceState.spirit
          }),
          evidenceTemplate({
            label: "Freezing temperature",
            evidence: "freezing-temperatures",
            onChange: (e) => setEvidenceState({ ...evidenceState, freezing: e.target.value as Trilean }),
            defaultValue: evidenceState.freezing
          }),
          evidenceTemplate({
            label: "Writing Book",
            evidence: "ghost-writing",
            onChange: (e) => setEvidenceState({ ...evidenceState, writing: e.target.value as Trilean }),
            defaultValue: evidenceState.writing
          }),
        ]}
      />
      <Flex flexDir={[ "column", "row" ]}>
        <Box px={5}>
          <TableGenerator
            headers={[
              { name: "name", label: "Name", labelStyle: { pr: 2, borderBottom: "1px" }, contentStyle: { pr: 2, borderBottom: "1px" } },
              { name: "evidences", label: "Evidences", labelStyle: { px: 2, borderBottom: "1px" }, contentStyle: { px: 2, borderBottom: "1px" } },
              { name: "sanity", label: "Hunt sanity", labelStyle: { pl: 2, borderBottom: "1px" }, contentStyle: { pl: 2, borderBottom: "1px", align: "center" } }
            ]}
            datas={RenderGhostTable(included.map(item => item.profile))}
          />
        </Box>
        <Box px={5}>
          <TableGenerator
            headers={[
              { name: "name", label: "Name", labelStyle: { pr: 2, borderBottom: "1px" }, contentStyle: { pr: 2, borderBottom: "1px" } },
              { name: "evidences", label: "Evidences", labelStyle: { px: 2, borderBottom: "1px" }, contentStyle: { px: 2, borderBottom: "1px" } },
              { name: "sanity", label: "Hunt sanity", labelStyle: { pl: 2, borderBottom: "1px" }, contentStyle: { pl: 2, borderBottom: "1px", align: "center" } }
            ]}
            datas={RenderGhostTable(excluded.map(item => item.profile))}
          />
        </Box>
      </Flex>
    </Box>
  )
}
