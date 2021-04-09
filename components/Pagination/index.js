import {
  Container,
  PaginationButtonFirst,
  PaginationButtonSecond,
} from "./style";

function index({ moviesData, onClick }) {
  const currentPage = moviesData?.page;

  return (
    <Container currentPage={currentPage}>
      <PaginationButtonFirst
        currentPage={currentPage}
        onClick={() => {
          onClick(currentPage - 1);
        }}
      >
        Page {currentPage - 1}
      </PaginationButtonFirst>
      <PaginationButtonSecond
        onClick={() => {
          onClick(currentPage + 1);
        }}
      >
        Page {currentPage === 1 ? currentPage + 1 : currentPage + 1}
      </PaginationButtonSecond>
    </Container>
  );
}

export default index;
