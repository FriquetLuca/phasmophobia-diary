import { Flex, Text } from "@chakra-ui/react";
import { type GhostProfile } from "./Ghosts";
import { cmunrmFont } from "@/fonts/cmunrm";
import EvidenceIcon from "../dataComponents/EvidenceIcon";

export const RenderGhostTable = (ghosts: GhostProfile[]) => ghosts.map(ghost => {
  return {
    name: ghost.name,
    evidences: (
      <Flex flexDir={"row"} justifyContent={"center"} alignContent={"center"}>
        {ghost.evidences.map((item, index) => <EvidenceIcon key={index} evidence={item} />)}
      </Flex>
    ),
    sanity: (
      <Flex justify={"center"} align={"center"} p={"0.3em"} h={"1.75em"} w={"3.5em"} bgColor={"#b30101"} borderRadius={"50%"}>
        <Text
          className={cmunrmFont.className}
          textColor={"white"}
          textShadow={"-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000"}
        >
          {`${ghost.sanity} %`}
        </Text>
      </Flex>
    )
  }
});