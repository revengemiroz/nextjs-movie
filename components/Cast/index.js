import React, { useState, useCallback, useEffect } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

import { PrevButton, NextButton } from "./buttons";
import CastItem from "../CastItem";

import {
  Embla,
  StyledEmblaContainer,
  StyledEmblaViewport,
  StyledEmblaSlide,
  Dott_Button_Container,
  Dott_Button,
} from "./style";

function index({ cast }) {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 10,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <Embla>
      <StyledEmblaViewport ref={viewportRef}>
        <StyledEmblaContainer>
          {cast?.map((i, idx) => (
            <StyledEmblaSlide key={idx}>
              <CastItem person={i} />
            </StyledEmblaSlide>
          ))}
        </StyledEmblaContainer>
      </StyledEmblaViewport>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Embla>
  );
}

export default index;
