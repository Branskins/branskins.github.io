import Link from "next/link"

export default function FeatureProjectsPage() {
  return (
    <>
      <div className="wrapper">
        <p className="feature-title">Feature projects</p>
        <div className="feature-container">
          <div className="feature-picture-card"><img className="feature-picture" src="images/profile.jpg" alt="" /></div>
          <div className="feature-content">
            <h2><Link href='/work/designingdashboards'>Classifying Legendary Pokemon</Link></h2>
            <div>
              <span className="badge">2022</span>
              <span className="topic">Clustering</span>
            </div>
            <p>What does it make a Pokemon legendary? Pokemon have stats that can used to determined if a Pokemon is strong enough to be considered Legendary.</p>
          </div>
        </div>
        {/* First container */}
        <div className="feature-container">
          <div className="feature-picture-card"><img className="feature-picture" src="images/profile.jpg" alt="" /></div>
          <div className="feature-content">
            <h2><Link href='/work/designingdashboards'>Classifying Legendary Pokemon</Link></h2>
            <div>
              <span className="badge">2022</span>
              <span className="topic">Clustering</span>
            </div>
            <p>What does it make a Pokemon legendary? Pokemon have stats that can used to determined if a Pokemon is strong enough to be considered Legendary.</p>
          </div>
        </div>
        {/* Second container */}
      </div>
    </>
  )
}