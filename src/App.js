import "./styles.css";

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
        <Skilllist />
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

const Skilllist = () => {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="🤚" color="yellow" />
      <Skill skill="Python" emoji="🏄" color="orange" />
      <Skill skill="Web Design" emoji="🏎️" color="green" />
      <Skill skill="Git and Github" emoji="🐍" color="pink" />
      <Skill skill="React" emoji="👏" color="blue" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};
