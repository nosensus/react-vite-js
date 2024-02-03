import { useEffect, useState } from "react";
import logo from "/logo-name.svg";
import { styled } from "styled-components";
import "./Header.css";

// style.header - can be styled.div or styled.p that means wrap into tag we set after comma
const HeaderComponent = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

const logoAltText = "Result";

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    // function will clean everything like timers, listeners and etc
    return () => {
      clearInterval(interval);
      console.log("Cleaning ...");
    };
  }, []); // если массив оставить пустым, то он вызовется в момент инициализации компонента

  return (
    <HeaderComponent>
      <img src={logo} alt={logoAltText} />
      <span>Time should be here {time.toLocaleTimeString()}</span>
    </HeaderComponent>
  );
}
