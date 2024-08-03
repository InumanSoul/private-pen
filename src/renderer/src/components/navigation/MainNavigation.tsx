import { HiArchiveBox, HiCog, HiHeart } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const LinkItem = ({ to, children }: { to: string; children: React.ReactNode }): React.ReactNode => {
  return (
    <Link
      to={to}
      className="w-full flex items-center gap-1 text-gray-600 hover:text-gray-950 rounded-sm duration-200"
    >
      {children}
    </Link>
  )
}

const navigationElements = [
  {
    to: '/',
    icon: <HiHeart />,
    text: 'Starred'
  },
  {
    to: '/archived',
    icon: <HiArchiveBox />,
    text: 'Archived'
  },
  {
    to: '/settings',
    icon: <HiCog />,
    text: 'Settings'
  }
]

const MainNavigation = ({ collapsed }: { collapsed: boolean }): React.ReactNode => {
  return (
    <nav className="flex flex-col ml-3 mr-2 space-y-2 pb-3 border-b border-gray-300">
      {navigationElements.map((el) => (
        <LinkItem key={el.to} to={el.to}>
          {el.icon}
          <span className={`${collapsed ? 'hidden' : 'block'}`}>{el.text}</span>
        </LinkItem>
      ))}
    </nav>
  )
}

export default MainNavigation
