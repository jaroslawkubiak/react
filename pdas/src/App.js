import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistans</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                image={AlexaImage}
                handle="@alexa99"
                description="Alexa was made by Amazon for shopping."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                image={CortanaImage}
                handle="@cortana32"
                description="Cortana was made by Microsoft for what? Nobody knows :D"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                image={SiriImage}
                handle="@siri01"
                description="Siri was made by Apple for iPhones."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
