import Link from "next/link"
import { getSortedProjectsData } from '../lib/projects'
import { formatDate } from '../lib/date'

export default function ProjectsPage({ allProjectsData }) {
  return (
    <>
      <div className="wrapper">
        <h1>Projects</h1>

        {allProjectsData.map(({ id, title, date, topic, picture, description }) => (
          <div key={id} className="feature-container">
            <div className="feature-picture-card">
              <img className="feature-picture" src={`images/${picture}.png`} alt="" />
            </div>
            <div className="feature-content">
              <h2><Link href={`/projects/${id}`}>{title}</Link></h2>
              <div className="annotation-wrapper">
                <span className="badge">{formatDate(date)}</span>
                <span className="topic">{topic}</span>
              </div>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}