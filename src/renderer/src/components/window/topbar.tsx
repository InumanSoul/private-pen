import useUsers from '@renderer/hooks/useUsers'
import { SetStateAction, useEffect, useState } from 'react'
import { HiPlusCircle, HiUserCircle } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarRightCollapseFilled
} from 'react-icons/tb'

const TopBar = ({
  collapsed,
  sideBarHandler
}: {
  collapsed: boolean
  sideBarHandler: React.Dispatch<SetStateAction<boolean>>
}): React.ReactNode => {
  const { getUserDetails } = useUsers()
  const [username, setUsername] = useState('')

  useEffect(() => {
    getUserDetails(1).then((res) => {
      if (res) {
        console.log(res)
        setUsername(res.Name)
      } else {
        console.error('User not found')
      }
    })
  }, [])

  return (
    <div className="fixed top-0 flex gap-2 items-center justify-between p-4 w-full h-9 bg-gray-100 z-50">
      <button
        className="ml-16 text-gray-700 hover:text-gray-900 hover:bg-gray-300 rounded"
        onClick={() => sideBarHandler((prev) => !prev)}
      >
        {!collapsed ? (
          <TbLayoutSidebarLeftCollapseFilled className="size-6" />
        ) : (
          <TbLayoutSidebarRightCollapseFilled className="size-6" />
        )}
      </button>
      <div className="[-webkit-app-region:drag] flex-1 h-9 w-full"></div>
      <Link
        to="/notes/create"
        className="text-gray-700 hover:text-gray-950 ease-linear duration-200 flex items-center gap-1 text-sm"
      >
        New note
        <HiPlusCircle className="size-6" />
      </Link>
      <Link
        to="/settings"
        className="text-gray-700 hover:text-gray-950 ease-linear duration-200 flex items-center gap-1 text-sm"
      >
        {username || 'User'}
        <HiUserCircle className="size-6" />
      </Link>
    </div>
  )
}

export default TopBar
