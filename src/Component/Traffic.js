import "./style/Light.css";
import React from "react";

function Traffic(props) {
  return (
    <>
      <div className="box">
        <div className="container">
          {props.ischnage
            ? props.colors.map((item, index) => {
                return (
                  <div
                    className="light"
                    style={{
                      backgroundColor: item === props.Light ? item : "grey",
                    }}
                    key={index}
                  ></div>
                );
              })
            : props.red.map((off, index) => {
                return (
                  <div
                    className="light"
                    style={{
                      backgroundColor: off,
                    }}
                    key={index}
                  ></div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Traffic;
