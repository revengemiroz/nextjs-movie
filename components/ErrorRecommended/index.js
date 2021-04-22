import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Container, TextContainer, ImageContainer, GoHome } from "./style";

function index(props) {
  const [baseURL, setBaseURL] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  return (
    <Container>
      <TextContainer>
        <p>Sorry!</p>
        <p>There are no recommended movies</p>
      </TextContainer>
      <ImageContainer>
        <img
          src="https://movies.fidalgo.dev/static/media/empty.e0b5f43f.svg"
          alt="empty"
        />
      </ImageContainer>
      <Link href={baseURL + "popular"}>
        <GoHome>
          {/* use this to convert the featherIcons into raw svg code to change the color on hover */}
          {/* https://react-svgr.com/playground/ */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-home"
            {...props}
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <path d="M9 22V12h6v10" />
          </svg>
          <span>Home</span>
        </GoHome>
      </Link>
    </Container>
  );
}

export default index;
