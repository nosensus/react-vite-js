import classes from "./Button.module.css";

export default function Button({ children, onClickBtn, isActive, ...props }) {
  // let classes = "button";
  // if (isActive) classes += " active";
  // ...props - we need when name of parameter and attribute are the same like disabled={disabled} or onclick={onClick}

  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      // className={classes}
      onClick={onClickBtn}
    >
      {children}
    </button>
  );
}
