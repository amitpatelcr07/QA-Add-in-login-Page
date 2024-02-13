import "./DisplayQ.css";
import { useState } from "react";
function DisplayQ(props) {
  const { id, title, info } = props;
  const [displaybtn, setDisplaybtn] = useState(true);
  const [displayInfo, setDisplayInfo] = useState(null);

  function handler(e) {
    e.target.value === "+" ? setDisplaybtn(false) : setDisplaybtn(true);
    setDisplayInfo(e.target.value);
  }

  return (
    <>
      <div key={id} className="question-card">
        <div className="container">
          <div className="left">
            <p>{title}</p>
          </div>
          <div className="right">
            {displaybtn ? (
              <button onClick={handler} value={"+"} className="btn">
                +
              </button>
            ) : (
              <button onClick={handler} value={"-"} className="btn">
                -
              </button>
            )}
          </div>
        </div>
        <div>{displayInfo === "+" ? <p>{info}</p> : null}</div>
      </div>
    </>
  );
}

export default DisplayQ;
