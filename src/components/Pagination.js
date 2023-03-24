import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ itemsCount, itemsPerPage, setCurrentPage }) => {

const pagesCount = Math.ceil(itemsCount / itemsPerPage);

const handlePageClick = (event) => {
    console.log("clicked",event.selected)
    setCurrentPage(event.selected * itemsPerPage);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
