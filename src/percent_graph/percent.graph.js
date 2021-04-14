import React, { useEffect, useState } from "react";
import "./percent.graph.css";
import { like_color } from "../dummy/data";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function PercentGraph() {
  const [data, setData] = useState(undefined);

  const getData = (props) => {
    // axios 에서 데이터가져오는 과정이라고 가정한다.
    setTimeout(() => {
      setData(like_color);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className="graph">
      {data &&
        data.map((item, idx) => {
          // console.log('item',Object.keys(item))
          return (
            <div
              key={idx}
              style={{
                flex: Object.values(item)[0],
                backgroundColor: Object.keys(item),
              }}
            ></div>
          );
        })}
    </div>
  );
}

export default withRouter(PercentGraph);
