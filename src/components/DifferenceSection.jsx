import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferenceSection() {
  // 1. State can not be out of function
  // 2. State can not be in the conditions like IF
  // 3. State should be initialized on the top of the function

  // state
  // const stateArray = useState("Click on button");
  const [contentType, setContentType] = useState("Click on button");

  function handleClick(type) {
    console.log("Click event", type);
    setContentType(type);
  }

  // let tabContent = null;
  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>;
  // } else {
  //   tabContent = <p>Click the tab</p>;
  // }

  return (
    <section>
      <h1>We are different than other</h1>
      <Button
        isActive={contentType === "way"}
        onClickBtn={() => handleClick("way")}
      >
        Text 1
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClickBtn={() => handleClick("easy")}
      >
        Text 2
      </Button>

      {/* {contentType ? <p>{differences[contentType]}</p> : <p>Click the tab</p>} */}

      {/* {!contentType ? <p>Click the tab</p> : null}
        {contentType ? <p>{differences[contentType]}</p> : null} */}

      {!contentType && <p>Click the tab</p>}
      {contentType && <p>{differences[contentType]}</p>}

      {/* {tabContent} */}
    </section>
  );
}
