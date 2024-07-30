import { HiPlusCircle, HiUserCircle } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const TopBar = (): JSX.Element => {
  return (
    <div className="fixed top-0 flex gap-2 items-center justify-between p-4 w-full h-9 bg-gray-100 z-50">
      <div className="[-webkit-app-region:drag] flex-1 h-9 w-full"></div>
      <Link
        to="/notes/create"
        className="text-gray-700 hover:text-gray-950 ease-linear duration-200 flex items-center gap-1 text-sm"
      >
        New note
        <HiPlusCircle className="size-6" />
      </Link>
      <Link
        to="/preferences"
        className="text-gray-700 hover:text-gray-950 ease-linear duration-200 flex items-center gap-1 text-sm"
      >
        Username
        <HiUserCircle className="size-6" />
      </Link>
    </div>
  )
}

export default TopBar
