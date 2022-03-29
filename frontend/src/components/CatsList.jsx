import { useEffect, useState } from "react";
import { Row, Pagination, Spinner } from "react-bootstrap";
import useCats from "../hooks/useCats";
import Cat from "./Cat";

//Utils
import { sortFunction } from "../utils";

const CatsList = () => {
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const { cats, loading, order } = useCats();

  //Pagination
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = sortFunction(cats, order).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  let items = [];
  for (let number = 1; number <= Math.ceil(cats.length / 6); number++) {
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

  useEffect(() => {
    paginate(1);
  }, [cats]);

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
    // Loader
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          {" "}
          <Row className="mt-5">
            {currentPosts.length === 0 ? (
              <h1 style={{ textAlign: "center" }}>No Cats Found :(</h1>
            ) : (
              currentPosts.map((cat) => <Cat cat={cat} key={cat.id} />)
            )}
          </Row>
          {paginationBasic}
        </>
      )}
    </>
  );
};

export default CatsList;
