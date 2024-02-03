import React from "react";
// export default function IntroSection() {
//   return (
//     <section>
//       <h1 style={{ color: red }}>Title</h1>
//       <h3>Title h3</h3>
//     </section>
//   );
// }

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement(
      "h1",
      { className: "center", style: { color: "#666" }, key: 1 },
      "Title h1"
    ),
    React.createElement("h3", { style: { color: "red" }, key: 2 }, "Title h3"),
  ]);
}
