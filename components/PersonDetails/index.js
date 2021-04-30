import React, { useState } from "react";

import EmptyImage from "../EmptyImage";
import Spinner from "../Spinner";

import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  ImgContainer,
  PersonDetails,
  Name,
  DateOfBirth,
  Biography,
  ExternalLinks,
} from "./style";

function index({ personDetails, lines = 3 }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!personDetails) {
    return null;
  }

  const { profile_path } = personDetails;

  return (
    <Container>
      <ImgContainer>
        {!imgLoaded && profile_path ? <Spinner type="black" /> : null}
        {profile_path && (
          <img
            src={ImgBaseURL + "w780" + personDetails?.profile_path}
            alt={personDetails?.profile_path}
            onLoad={() => setImgLoaded(true)}
          />
        )}
        {profile_path == null && <EmptyImage user={false} />}
      </ImgContainer>

      <PersonDetails>
        <Name>{personDetails?.name}</Name>
        <DateOfBirth>{personDetails?.birthday}</DateOfBirth>

        <Biography>
          <span className="biographyTitle">The Biography</span>
          {personDetails.biography ? (
            <p className="biography">{personDetails?.biography}</p>
          ) : (
            <p className="biography">There is no biography available...</p>
          )}
        </Biography>

        <ExternalLinks>
          <a
            href={`https://www.imdb.com/name/` + personDetails?.imdb_id}
            target="_blank"
          >
            IMDB
          </a>
        </ExternalLinks>
      </PersonDetails>
    </Container>
  );
}

export default index;
