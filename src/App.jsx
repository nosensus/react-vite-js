import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferenceSection from "./components/DifferenceSection";
import IntroSection from "./components/IntoSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effect");

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection
          active={tab}
          onChange={(currentTab) => setTab(currentTab)}
        />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferenceSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
