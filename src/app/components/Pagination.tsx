type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex space-x-2">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`p-2 px-4 bg-gray-200 rounded-md transition duration-200 cursor-pointer ${
              page === currentPage
                ? "text-white bg-gray-800"
                : "text-black hover:bg-gray-300"
            }`}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
