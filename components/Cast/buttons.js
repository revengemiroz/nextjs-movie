import Image from "next/image";

import { StyledEmblaButton } from "./style";

export const PrevButton = ({ enabled, onClick }) => (
  <StyledEmblaButton className="prev" onClick={onClick} disabled={!enabled}>
    <Image src="/arrow-left.svg" width={12} height={12} />
  </StyledEmblaButton>
);

export const NextButton = ({ enabled, onClick }) => (
  <StyledEmblaButton className="next" onClick={onClick} disabled={!enabled}>
    <Image src="/arrow-right.svg" width={12} height={12} />
  </StyledEmblaButton>
);
