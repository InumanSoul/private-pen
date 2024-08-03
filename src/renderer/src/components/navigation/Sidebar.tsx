import { Link } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { HiDocumentText, HiPlus } from 'react-icons/hi2'
import useNotes from '@renderer/hooks/useNotes'
import { useEffect, useState } from 'react'

const Sidebar = ({ collapsed }: { collapsed: boolean }): React.ReactNode => {
  const { getNotes } = useNotes()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes().then((res) => {
      console.log(res)
      setNotes(res)
    })
  }, [])

  return (
    <aside className={`${collapsed ? 'w-10' : 'w-44'} py-5 duration-200 ease-in-out`}>
      <MainNavigation collapsed={collapsed} />
      {!collapsed && (
        <ul className="ml-3 mr-2 py-3 space-y-1 text-gray-700 border-b border-gray-300">
          {notes &&
            notes?.map((note) => (
              <li key={note.Id}>
                <Link to={`/notes/${note.Id}`} className="flex items-center gap-1">
                  <HiDocumentText className="text-gray-400" />
                  {note.Title}
                </Link>
              </li>
            ))}
          {notes.length === 0 && <p className="text-gray-400">No notes found</p>}
        </ul>
      )}
      <Link
        to="/notes/create"
        className="text-gray-700 mx-2 p-2 inline-flex items-center justify-start w-full text-center rounded-lg"
      >
        <HiPlus />
        {!collapsed && <span className="ml-2">Create Note</span>}
      </Link>
    </aside>
  )
}

export default Sidebar
