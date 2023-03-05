import React from "react";
import "./Calculate.css";
import { useState } from "react";

const Calculate = () => {
  const [result, setresult] = useState("");
  const [history,sethistory]= useState('');
  const handleclick = (e) => {
    setresult(result.concat(e.target.value));
     sethistory(history.concat(e.target.value))
  };
  const clear = () => {
    setresult("");
    sethistory("")
  };
  const calculateres = () => {
    setresult(eval(result).toString());
  };
  return (
    <div className="maincal">
      <div className="maincontainer">
        <div className="inputvalue" style={{width:"289px",height:"48px",margin:"5px"}}>
          <div className="input" style={{display:'flex',justifyContent:"end",color:"yellow"}}>{history}</div>
          <div className="secondinput" style={{display:'flex',justifyContent:"end",color:"white"}}>{result}</div>
          {/* <h3 style={{color:"white"}}>{history}</h3>
          <input type="text" value={result} /> */}
        </div>
        <div className="allbutton">
          <button
            className="buttonac"
            onClick={clear}
            style={{ width: "144px", backgroundColor: "#AC3939" }}
          >
            AC
          </button>
          <button onClick={handleclick} value="/">
            /
          </button>
          <button onClick={handleclick} value="*">
            X
          </button>
          <button onClick={handleclick} value="7">
            7
          </button>
          <button onClick={handleclick} value="8">
            8
          </button>
          <button onClick={handleclick} value="9">
            9
          </button>
          <button onClick={handleclick} value="-">
            -
          </button>
          <button onClick={handleclick} value="4">
            4
          </button>
          <button onClick={handleclick} value="5">
            5
          </button>
          <button onClick={handleclick} value="6">
            6
          </button>
          <button onClick={handleclick} value="+">
            +
          </button>
          <button onClick={handleclick} value="1">
            1
          </button>
          <button onClick={handleclick} value="2">
            2
          </button>
          <button onClick={handleclick} value="3">
            3
          </button>
          <button onClick={handleclick} value=".">
            .
          </button>
          <button onClick={handleclick} value="0" style={{ width: "144px" }}>
            0
          </button>
          <button
            onClick={calculateres}
            value="="
            style={{ width: "144px", backgroundColor: "#004466" }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
