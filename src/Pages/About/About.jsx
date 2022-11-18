import "./about.scss";
import hands from "../../assets/hands.jpg";
import TeamData from "../../Data/TeamData";
import AppStat from "../../Data/AppStat";

const About = () => {
  return (
    <section>
      <header>
        <p className="about">About us</p>
        <h1>About Soberpal</h1>
        <p className="about__soberpal">
          Everything you need to go through the journey of reducing your alcohol
          intake. We’ve done the heavy lifting
          <br />
          so you don’t have to - the perfect starting point.
        </p>
        <p className="learn__more">Learn more about the team behind soberpal</p>
      </header>
      <section className="stats">
        <img src={hands} alt="hands" className="hands" />
        <div className="stats__content">
          <p>We’ve helped a couple of people reduce their inatke of alcohol</p>
          <h3>
            We’re only just getting <br />
            started on our journey
          </h3>
          {/* Stats data */}
          <div className="stats__data-container">
            {AppStat.map((stat) => (
              <div className="stats__data" key={stat.id}>
                <p className="count">{stat.count}</p>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="team">
        <h3>Meet our team</h3>
        <p>
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture <br />
          that empowers you to do you best work.
        </p>
        <div className="team__members">
          {/* Team Data */}
          {TeamData.map((data) => (
            <div className="member" key={data.id}>
              <img className="avatar" src={data.avatar} alt={data.name} />
              <p className="name">{data.name}</p>
              <p className="designation">{data.designation}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
