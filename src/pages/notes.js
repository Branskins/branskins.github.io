import Link from "next/link"
import { getSortedNotesData } from '../lib/notes'
import { formatDate } from '../lib/date'

export default function NotesPages({ allNotesData }) {
  return (
    <>
      <div className="wrapper">
        <h1>Notes</h1>

        {allNotesData.map(({ id, title, date, topic }) => (
          <div key={id} className="feature-container">
            <div className="feature-content">
              <h2><Link href={`/notes/${id}`}>{title}</Link></h2>
              <div className="annotation-wrapper">
                <span className="badge">{formatDate(date)}</span>
                <span className="topic">{topic}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allNotesData = getSortedNotesData();
  return {
    props: {
      allNotesData,
    },
  };
}
