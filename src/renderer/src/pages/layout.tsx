import { Outlet } from 'react-router-dom'
import TopBar from '@renderer/components/window/topbar'
import Sidebar from '@renderer/components/navigation/Sidebar'
import useDatabase from '@renderer/models/useDatabase'
import { useEffect } from 'react'

const Layout = (): JSX.Element => {
  const { createDatabase } = useDatabase()

  useEffect(() => {
    createDatabase()

    return (): void => {
      console.log('Database closed')
    }
  }, [])

  return (
    <>
      <TopBar />
      <div className="flex flex-nowrap bg-gray-50 mt-9">
        <Sidebar />
        <main className="flex-1 bg-white shadow min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout
