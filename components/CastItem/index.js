import React, { useState } from "react";
import Link from "next/link";

import EmptyImage from "../EmptyImage";
import Spinner from "../Spinner";

import { ImgBaseURL } from "../../utils/tmdb";

import { ImageContainer } from "./style";

function index({ person }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const { profile_path } = person;

  return (
    <Link
      key={person?.id}
      href={{
        pathname: process.env.NEXT_PUBLIC_URL + `person`,
        query: { id: person.id },
      }}
      passHref
    >
      <ImageContainer>
        {!imgLoaded && profile_path ? <Spinner type="black" /> : null}
        {profile_path && (
          <img
            src={ImgBaseURL + person?.profile_path}
            alt={person?.profile_path}
            onLoad={() => setImgLoaded(true)}
          />
        )}
        {profile_path == null && <EmptyImage user={true} />}
      </ImageContainer>
    </Link>
  );
}

export default index;
