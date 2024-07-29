import { HiArchiveBox, HiCog, HiHeart } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const MainNavigation = (): JSX.Element => {
  return (
    <nav className="flex flex-col ml-3 mr-2 space-y-2 pb-3 border-b border-gray-300">
      <Link
        to="/"
        className="w-full flex items-center gap-1 text-gray-600 hover:text-gray-950 rounded-sm duration-200"
      >
        <HiHeart />
        Starred
      </Link>
      <Link
        to="/archived"
        className="w-full flex items-center gap-1 text-gray-600 hover:text-gray-950 rounded-sm duration-200"
      >
        <HiArchiveBox />
        Archived
      </Link>
      <Link
        to="/settings"
        className="w-full flex items-center gap-1 text-gray-600 hover:text-gray-950 rounded-sm duration-200"
      >
        <HiCog />
        Settings
      </Link>
    </nav>
  )
}

export default MainNavigation
