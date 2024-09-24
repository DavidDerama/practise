type AchievementsDisplayProps = {
  achievementsArr: string[];
};

export const AchievementsDisplay = ({
  achievementsArr,
}: AchievementsDisplayProps) => {
  const displayedAchievements = achievementsArr.map((achievement) => {
    if (achievement === "bell") {
      return <li>🔔</li>;
    }
    if (achievement === "bag") {
      return <li>💰</li>;
    }
    if (achievement === "trophy") {
      return <li>🏆</li>;
    }
  });
  return (
    <div className="stats-display">
      <h2>Live Achievements - {achievementsArr.length}</h2>
      <ul className="stats-container">{displayedAchievements}</ul>
    </div>
  );
};
