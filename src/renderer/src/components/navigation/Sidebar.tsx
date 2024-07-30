import { Link } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { HiDocumentText, HiPlus } from 'react-icons/hi2'

const notesAvailable = [
  {
    id: 1,
    title: 'Note title 1'
  },
  {
    id: 2,
    title: 'Note title 2'
  }
]

const Sidebar = (): JSX.Element => {
  return (
    <aside className="w-44 py-5">
      <MainNavigation />
      <ul className="ml-3 mr-2 py-3 space-y-1 text-gray-700 border-b border-gray-300">
        {notesAvailable.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`} className="flex items-center gap-1">
              <HiDocumentText className="text-gray-400" />
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/notes/create"
        className="text-gray-700 mx-2 p-2 inline-flex items-center justify-start w-full text-center rounded-lg"
      >
        <HiPlus />
        New note
      </Link>
    </aside>
  )
}

export default Sidebar
