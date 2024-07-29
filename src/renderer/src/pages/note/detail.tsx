import Container from '@renderer/components/container'
import { useParams } from 'react-router-dom'

const NotesDetail: React.FC = () => {
  const { param } = useParams<{ param: string }>()

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-2">Note title {param}</h1>
      <p className="text-gray-700">This is the note detail page</p>
    </Container>
  )
}

export default NotesDetail
