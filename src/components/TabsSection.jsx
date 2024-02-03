import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section>
      <Button isActive={active === "main"} onClickBtn={() => onChange("main")}>
        Main
      </Button>
      <Button
        isActive={active === "feedback"}
        onClickBtn={() => onChange("feedback")}
      >
        Feedback
      </Button>
      <Button
        isActive={active === "effect"}
        onClickBtn={() => onChange("effect")}
      >
        Effect
      </Button>
    </section>
  );
}
