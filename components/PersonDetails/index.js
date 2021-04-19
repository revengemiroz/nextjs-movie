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

function index({ personDetails }) {
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
          <p className="biography">{personDetails?.biography}</p>
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
