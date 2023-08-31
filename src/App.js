import "./styles.css";
import { skills } from "./data.js";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {
          // should contain one SKill component for each
          // web development skill that you have,
          // customized with props.
        }
        <Skillist />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <div>
      <img className="avatar" src="ai.jpg" alt="AI headShot" />
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Jeremiah Dunphy</h1>
      <p>
        Military veteran who's diving headfirst into the realm of software
        engineering. The tenacity and discipline developed during my years of
        service are now driving my journey into coding. Beyond the screen, I'm
        also a die-hard foodie. I enjoy Exploring the rich tapestry of flavors
        and cultures.
      </p>
    </div>
  );
};

const Skillist = () => {
  return (
    <ul className="skill-list">
      {skills.map((skillData, Index) => (
        <Skill
          key={Index}
          skill={skillData.skill}
          emoji={skillData.emoji}
          color={skillData.color}
          level={skillData.level}
        />
      ))}
    </ul>
  );
};

const Skill = ({ skill, emoji, color, level }) => {
  switch (level) {
    case "Advanced":
      level = "💪";
      break;
    case "Intermediate":
      level = "👍🏻";
      break;
    case "Beginner":
      level = "👶🏻";
      break;
    default:
      throw new Error("Invalid Level");
  }

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level}</span>
    </div>
  );
};
