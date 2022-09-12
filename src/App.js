import "./App.css";
import { useEffect, useState } from "react";
import Traffic from "./Component/Traffic";

let timer1;
let timer2;
let timer3;
let timer4;

function App() {
  const [Light, setLight] = useState("green");
  const [chnage, setchnage] = useState(1);
  const [data, setData] = useState(0);
  const [time, setTime] = useState(3000);
  const [item, setItm] = useState(true);
  const [error, setError] = useState("do not put 0s and 20s plus ");

  const red = ["red", "grey", "grey"];
  const colors = ["red", "yellow", "green"];

  const handelChange = (n) => {
    setTimeout(() => {
      setchnage(n);
      setLight("green");
    }, 1000);
  };

  useEffect(() => {
    if (chnage === 1) {
      timer1 = setTimeout(() => {
        setLight("yellow");
        timer1 = setTimeout(() => {
          setLight("red");
          handelChange(2);
        }, 2000);
      }, time);
    } else if (chnage === 2) {
      timer2 = setTimeout(() => {
        setLight("yellow");
        timer2 = setTimeout(() => {
          setLight("red");
          handelChange(3);
        }, 2000);
      }, time);
    } else if (chnage === 3) {
      timer3 = setTimeout(() => {
        setLight("yellow");
        timer3 = setTimeout(() => {
          setLight("red");
          handelChange(4);
        }, 2000);
      }, time);
    } else if (chnage === 4) {
      timer4 = setTimeout(() => {
        setLight("yellow");
        timer4 = setTimeout(() => {
          setLight("red");
          handelChange(1);
        }, 2000);
      }, time);
    }
  }, [chnage]);
  const handelSet = () => {
    const updateTime = data * 1000;
    console.log(data, "setdata");
    if (data <= 0 || null || data >= 20) {
      setItm(false);
    } else {
      setItm(true);
      setTime(updateTime);
      setchnage(1);
      setLight("green");
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    }
  };
  const handelReset = () => {
    setLight("green");
    setchnage(1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
  };
  return (
    <div className="App">
      <>
        <div style={{ display: "flex", height: "600px" }}>
          <Traffic
            ischnage={chnage === 1 ? true : false}
            Light={Light}
            colors={chnage !== 1 ? red : colors}
            red={red}
          />
          <Traffic
            ischnage={chnage === 2 ? true : false}
            Light={Light}
            colors={chnage !== 2 ? red : colors}
            red={red}
          />
          <Traffic
            ischnage={chnage === 3 ? true : false}
            Light={Light}
            colors={chnage !== 3 ? red : colors}
            red={red}
          />
          <Traffic
            ischnage={chnage === 4 ? true : false}
            Light={Light}
            colors={chnage !== 4 ? red : colors}
            red={red}
          />
        </div>
        <div className="start">
          <input
            type="text"
            placeholder="Enter time in sec"
            onChange={(e) => setData(e.target.value)}
          ></input>

          <button style={{ margin: "5px" }} onClick={handelSet}>
            Set
          </button>
          <button onClick={handelReset}>ReSet</button>
        </div>
        <div className="error">{item ? null : error}</div>
      </>
    </div>
  );
}

export default App;
