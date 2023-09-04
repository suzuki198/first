import React, { useEffect, useState } from "react";
import Color from "./conponents/Color";

const App = () => {
  console.log("aaa");
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitch = () => {
    setFaceFlag(!faceFlag);
  };

  useEffect(() => {
    console.log("use");
  }, [num, faceFlag]);

  if (num > 0) {
    if (num % 3 === 0) {
      faceFlag || setFaceFlag(true);
    } else {
      faceFlag && setFaceFlag(false);
    }
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <Color color="blue">お元気ですか？</Color>
      <Color color="pink">なんだよ</Color>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitch}>on/off</button>
      <p>{num}</p>
      {faceFlag && <p>(*'▽')</p>}
    </>
  );
};

export default App;
