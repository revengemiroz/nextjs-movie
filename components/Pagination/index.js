import {
  Container,
  PaginationButtonFirst,
  PaginationButtonSecond,
} from "./style";

function index({ moviesData, onClick }) {
  const currentPage = moviesData?.page;
  const totalPage = moviesData?.total_pages;

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
      {currentPage !== totalPage && (
        <PaginationButtonSecond
          onClick={() => {
            onClick(currentPage + 1);
          }}
        >
          Page {currentPage === 1 ? currentPage + 1 : currentPage + 1}
        </PaginationButtonSecond>
      )}
    </Container>
  );
}

export default index;
