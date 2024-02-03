import classes from "./FeedbackSection.module.css";
import Button from "../Button/Button";
import { useRef, useState } from "react";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  // lets use one state for all
  // const [form, setForm] = useState({
  //   name: "",
  //   hasError: false,
  //   reason: "help",
  // });

  function handleInputChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
    setInput(event.target.value);
  }

  function handleSelectChange(event) {
    setReason(event.target.value);
  }

  function toggleError() {
    //setHasError(!hasError); //false
    //setHasError(!hasError); // we expect true - but this will not happen because we use the same state when we call second time
    // to fix that we need call current state, we use arrow function for that
    setHasError((prevState) => !prevState);
    //setHasError((prevState) => !prevState); // here we call renewed state
  }

  function StateVsRef() {
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);
    const inputRef = useRef();

    function handleKeyDown(event) {
      if (event.key === "Enter") {
        setShow(true);
      }
    }

    console.log(inputRef.current);
    {
      /* current is undefined before entering inside */
    }

    return (
      <div>
        {/* <h3>Input value: {show && value}</h3> */}
        <h3>Input value: {show && inputRef.current.value}</h3>{" "}
        {/* inputRef this is DOM element */}
        {/* input.current - this is input below because they are related*/}
        <input
          ref={inputRef}
          type="text"
          // value={value}
          onKeyDown={handleKeyDown}
          className={classes.control}
          // onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }

  // two way binding
  // {{ }} - first curly braces means that dynamic is starting, and the second is object inside
  return (
    <section>
      <h3>Feedback form</h3>

      <Button onClickBtn={toggleError}>Toggle error</Button>

      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className={classes.control}
          type="text"
          value={name}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
          onChange={handleInputChange}
        />

        <label htmlFor="reason">Reason</label>
        <select
          name=""
          id="reason"
          className={classes.control}
          value={reason}
          onChange={handleSelectChange}
          // onChange={(event) => setReason(event.target.value)} -- inline style
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggestion</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError} isActive={!hasError}>
          Send
        </Button>
      </form>

      <hr />

      <StateVsRef />
    </section>
  );
}
