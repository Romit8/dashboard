import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";

import TextTruncate from "react-text-truncate";
const Card = () => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setVal(res.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error, "error data fetching");
      });
  }, []); // Empty dependency array to fetch data only once

  return (
    <div className="cardcontain">
      <div className="cards">
        <div className="container">
          <div className="cardh">
            <h1>CARDS </h1>
            <hr />
          </div>
          <div className="row">
            {/* Use the return statement inside map to render JSX */}
            {val.map((item) => (
              <div className="col-sm-4 mt-3" key={item.id}>
                <div className="card">
                  <div className="card-header">{item.id}</div>
                  <div className="card-body">
                    <h2 className="card-title">
                      <TextTruncate
                        line={1}
                        element="span"
                        truncateText="..."
                        text={item.title}
                      />
                    </h2>
                    <p className="card-text">
                      <TextTruncate
                        line={3}
                        element="span"
                        truncateText="..."
                        text={item.body}
                      />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Card;
