import { useState } from "react";
import useCats from "../hooks/useCats";
import Cat from "./Cat";
import { Row, Pagination, Spinner } from "react-bootstrap";

const CatsList = () => {
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const { cats, loading } = useCats();
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = cats.slice(indexOfFirstPost, indexOfLastPost);

  let items = [];
  for (let number = 1; number <= Math.floor(cats.length / 6); number++) {
    items.push(
      <Pagination.Item
        onClick={() => paginate(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginate = (pageNumber) => {
    setActive(pageNumber);
    setCurrentPage(pageNumber);
  };

  const paginationBasic = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Pagination>{items}</Pagination>
    </div>
  );

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          {" "}
          <Row className="mt-5">
            {currentPosts.map((cat) => (
              <Cat cat={cat} key={cat.id} />
            ))}
          </Row>
          {paginationBasic}
        </>
      )}
    </>
  );
};

export default CatsList;
