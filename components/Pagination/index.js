import Image from "next/image";
import React, { useEffect } from "react";
import {
  Container,
  PaginationButtonFirst,
  PaginationButtonSecond,
} from "./style";

function index({ moviesData, onClick, movieId }) {
  if (!moviesData) {
    return null;
  }

  useEffect(() => {
    onClick(1);
  }, [movieId]);

  const currentPage = moviesData?.page;
  const totalPage = moviesData?.total_pages;

  function renderPrevPageButton(currentPage) {
    if (currentPage !== 1) {
      {
        return (
          <PaginationButtonFirst
            currentPage={currentPage}
            onClick={() => {
              onClick(currentPage - 1);
            }}
          >
            <span>
              <Image
                src="/arrow-left.svg"
                alt="Picture of the author"
                width={14}
                height={14}
              />
              Page {currentPage - 1}
            </span>
          </PaginationButtonFirst>
        );
      }
    }
    return null;
  }

  function renderNextPageButton(currentPage, totalPage) {
    if (currentPage !== totalPage) {
      return (
        <PaginationButtonSecond
          onClick={() => {
            onClick(currentPage + 1);
          }}
        >
          <span>
            Page {currentPage === 1 ? currentPage + 1 : currentPage + 1}
            <Image
              src="/arrow-right.svg"
              alt="Picture of the author"
              width={14}
              height={14}
            />
          </span>
        </PaginationButtonSecond>
      );
    }
    return null;
  }

  return (
    <Container currentPage={currentPage} totalPage={totalPage}>
      {renderPrevPageButton(currentPage)}
      {renderNextPageButton(currentPage, totalPage)}
    </Container>
  );
}

export default index;
