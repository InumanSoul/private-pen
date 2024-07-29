import { Link, Outlet } from 'react-router-dom'
import MainNavigation from '@renderer/components/navigation/MainNavigation'
import { HiDocumentText, HiPlus } from 'react-icons/hi2'

const Layout = (): JSX.Element => {
  return (
    <div className="flex flex-nowrap flex-shrink bg-gradient-to-tr from-emerald-100 to-cyan-100">
      <aside className="flex-none w-48 h-dvh sticky top-0 py-5">
        <MainNavigation />
        <ul className="ml-3 mr-2 py-3 space-y-1 text-gray-700">
          <li>
            <Link to="/notes/1" className="flex items-center gap-1">
              <HiDocumentText />
              Note title 1
            </Link>
          </li>
          <li>
            <Link to="/notes/2" className="flex items-center gap-1">
              <HiDocumentText />
              Note title 2
            </Link>
          </li>
          <li>
            <Link
              to="/notes/create"
              className="text-gray-700 inline-flex items-center justify-start w-full text-center rounded-lg"
            >
              <HiPlus />
              New note
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-grow bg-white rounded-2xl shadow-sm m-2">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
