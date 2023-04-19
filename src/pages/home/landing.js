export default function LandingPage() {
  return (
    <>
      <div className="land wrapper">
        <div className="land-container">
          <div className="land-info">
            <h1>Hi, I am Branskins, <br></br>a Data Enthusiast</h1>
            <p>You can call me Andrés as well, currently working as a data engineer.
              I spend most of my time handling big (or not) datasets,
              and I truly enjoy getting insights from real-world data.
            </p>
            <button className="cv-button">Download Resume</button>
          </div>
        </div>
        <div className="land-picture">
          <img className="picture" src="/images/profile.jpg" alt="Profile" />
        </div>
      </div>
    </>
  )
}