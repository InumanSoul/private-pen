import { Outlet } from 'react-router-dom'
import TopBar from '@renderer/components/window/topbar'
import Sidebar from '@renderer/components/navigation/Sidebar'
import { useEffect, useState } from 'react'
import useDatabase from '@renderer/hooks/useDatabase'

const Layout = (): JSX.Element => {
  const { initDatabase } = useDatabase()
  const [sideBarCollapse, setSideBarCollapse] = useState(false)

  useEffect(() => {
    initDatabase()
  }, [])

  return (
    <>
      <TopBar collapsed={sideBarCollapse} sideBarHandler={setSideBarCollapse} />
      <div className="flex flex-nowrap bg-gray-50 mt-9">
        <Sidebar collapsed={sideBarCollapse} />
        <main className="flex-1 bg-white shadow min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout
