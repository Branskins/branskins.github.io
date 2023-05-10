import { getSortedProjectsData } from '../lib/projects'

export default function ProjectsPage({ allProjectsData }) {
  return (
    <>
      <div className="wrapper">
        <h1>Projects</h1>
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