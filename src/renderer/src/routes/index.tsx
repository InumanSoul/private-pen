import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@renderer/pages/home/home'
import About from '@renderer/pages/about/about'
import Layout from '@renderer/pages/layout'
import CreateNote from '@renderer/pages/note/create'
import Settings from '@renderer/pages/settings/Settings'
import Archived from '@renderer/pages/archived/Archived'
import NotesDetail from '@renderer/pages/note/detail'

const Router = (): React.ReactNode => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'notes',
          children: [
            {
              path: ':param',
              element: <NotesDetail />
            },
            {
              path: 'create',
              element: <CreateNote />
            }
          ]
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'archived',
          element: <Archived />
        },
        {
          path: 'settings',
          element: <Settings />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
