import React, { useState } from "react";
import Truncate from "react-truncate";
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
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);

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
        <img src={ImgBaseURL + personDetails?.profile_path} />
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
