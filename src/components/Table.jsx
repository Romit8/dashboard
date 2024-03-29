import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setTable(res.data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error, "error data fetching");
      });
  }, []); // Empty dependency array to fetch data only once

  return (
    <div className="container"><h1>Table</h1>
    <hr />
        <div className="table-head">

        </div>
      <table className="table table-striped">
        <thead className="table-head">
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">USER ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">BODY</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
