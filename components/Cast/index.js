import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { Wrapper, Container } from "./style";

function NextArrow({ onClick }) {
  return (
    <Image onClick={onClick} src="/arrow-right.svg" width={5} height={5} />
  );
}

function PrevArrow({ onClick }) {
  return <Image onClick={onClick} src="/arrow-left.svg" width={5} height={5} />;
}

function index({ cast, baseURL }) {
  const [totalShow, setTotalShow] = useState(null);
  const sliderElement = useRef();

  // Set amount of items to show on slider based on the width of the element
  const changeTotalShow = () => {};

  const items = [...Array(5)].map((person) => <Container />);

  useEffect(() => {
    changeTotalShow();
    window.addEventListener("resize", changeTotalShow);
    return () => window.removeEventListener("resize", changeTotalShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: totalShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Wrapper ref={sliderElement}>
      <Slider {...settings}>{items}</Slider>
    </Wrapper>
  );
}

export default index;
