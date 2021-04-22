import React, { useState } from "react";
import Truncate from "react-truncate";

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
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);

  if (!personDetails) {
    return null;
  }

  const { profile_path } = personDetails;

  function handleTruncate(truncated) {
    if (truncated !== truncated) {
      setTruncated(true);
    }
  }

  function toggleLines(event) {
    event.preventDefault();
    setExpanded(!expanded);
  }

  return (
    <Container>
      <ImgContainer>
        {!imgLoaded && profile_path ? <Spinner type="black" /> : null}
        {profile_path && (
          <img
            src={ImgBaseURL + personDetails?.profile_path}
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

          <Truncate
            lines={!expanded && lines}
            className="biography"
            ellipsis={
              <span>
                ...{" "}
                <a className="truncate" href="#" onClick={toggleLines}>
                  show more
                </a>
              </span>
            }
            onTruncate={handleTruncate}
          >
            <p className="biography">
              {personDetails?.biography}{" "}
              {!truncated && expanded && (
                <span>
                  {" "}
                  <a className="truncate" href="#" onClick={toggleLines}>
                    show less
                  </a>
                </span>
              )}
            </p>
          </Truncate>
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
