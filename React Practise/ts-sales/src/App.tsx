import { useState, useEffect } from "react";
import { MenuButtons } from "./components/MenuButtons";
import { SalesDisplay } from "./components/SalesDisplay";
import { AchievementsDisplay } from "./components/AchievementsDisplay";
import { MotionDisplay } from "./components/MotionDisplay";
import profileImg from "./assets/profile.jpg";
import "./App.css";

type Motion = {
  revenue: number;
  commission: number;
};

function App() {
  const [sales, setSales] = useState<string[]>(() => {
    const salesFromLocal = localStorage.getItem("sales");
    return salesFromLocal ? JSON.parse(salesFromLocal) : [];
  });

  const [achievements, setAchievements] = useState<string[]>(() => {
    const achievementsFromLocal = localStorage.getItem("achievements");
    return achievementsFromLocal ? JSON.parse(achievementsFromLocal) : [];
  });

  const [motion, setMotion] = useState<Motion>(() => {
    const motionFromLocal = localStorage.getItem("motion");
    return motionFromLocal
      ? JSON.parse(motionFromLocal)
      : {
          revenue: 0,
          commission: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("sales", JSON.stringify(sales));
    localStorage.setItem("achievements", JSON.stringify(achievements));
    localStorage.setItem("motion", JSON.stringify(motion));
  }, [sales, achievements, motion]);

  useEffect(() => {
    if (sales.length === 1) {
      setAchievements((prev) => [...prev, "bell"]);
    }

    if (motion.revenue >= 2500 && !achievements.includes("bag")) {
      setAchievements((prev) => [...prev, "bag"]);
    }

    if (sales.length === 15 && !achievements.includes("trophy")) {
      setAchievements((prev) => [...prev, "trophy"]);
    }
  }, [sales, motion]);

  function addStar(): void {
    setSales((prev) => [...prev, "star"]);
    setMotion((prev) => ({
      ...prev,
      revenue: prev.revenue + 200,
      commission: prev.commission + 200 * 0.25,
    }));
  }

  function addFire(): void {
    setSales((prev) => [...prev, "fire"]);
    setMotion((prev) => ({
      ...prev,
      revenue: prev.revenue + 500,
      commission: prev.commission + 500 * 0.25,
    }));
  }
  return (
    <div className="app">
      <div className="profile-img">
        <img src={profileImg} alt="" />
      </div>
      <MenuButtons addStar={addStar} addFire={addFire} />
      <div className="displays">
        <SalesDisplay salesArr={sales} />
        <AchievementsDisplay achievementsArr={achievements} />
        <MotionDisplay
          revenue={motion.revenue}
          commission={motion.commission}
        />
      </div>
    </div>
  );
}

export default App;
