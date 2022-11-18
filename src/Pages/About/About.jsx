import "./about.scss";
import hands from "../../assets/hands.jpg";

const About = () => {
  return (
    <section>
      <header>
        <p>About us</p>
        <h1>About Soberpal</h1>
        <p>
          Everything you need to go through the journey of reducing your alcohol
          intake. We’ve done the heavy lifting
          <br />
          so you don’t have to - the perfect starting point.
        </p>
        <p>Learn more about the team behind soberpal</p>
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
            <div className="stats__data">
              <p className="count">200+</p>
              <p>People reached</p>
            </div>
            <div className="stats__data">
              <p className="count">60%</p>
              <p>Rate of recovery of our users</p>
            </div>
            <div className="stats__data">
              <p className="count">10k</p>
              <p>Global downloads</p>
            </div>
            <div className="stats__data">
              <p className="count">100+</p>
              <p>5-star reviews</p>
            </div>
          </div>
        </div>
      </section>
      <section className="team" >
        <h3>Meet our team</h3>
        <p>Our philosophy is simple — hire a team of diverse,
           passionate people and foster a culture <br/> 
           that empowers you to do you best work.
        </p>
        <div className="team__members" >
          
        </div>
      </section>
    </section>
  );
};

export default About;
