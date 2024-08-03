import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import useNotes from '@renderer/hooks/useNotes'
import { useEffect, useRef } from 'react'
import { HiStar } from 'react-icons/hi2'

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'New note title...',
        level: 1
      }
    }
  ]
}

const CreateNote = (): JSX.Element => {
  const { insertNote } = useNotes()
  const ejInstance = useRef<EditorJS | null>(null)
  const date = new Date()
  const dateString = date.toLocaleDateString()

  const initEditor = (): void => {
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: (): void => {
        ejInstance.current = editor
      },
      onChange: async (): Promise<void> => {
        handleSave()
      },
      autofocus: true,
      tools: {
        header: Header
      },
      data: DEFAULT_INITIAL_DATA
    })
  }

  const handleSave = async (): Promise<void> => {
    const content = await ejInstance.current?.save()
    if (content) {
      insertNote({
        Title: content.blocks[0].data.text,
        Detail: JSON.stringify(content),
        CreatedAt: date,
        UpdatedAt: date
      })
    }
  }

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor()
    }

    return (): void => {
      ejInstance?.current?.destroy()
      ejInstance.current = null
    }
  }, [])

  return (
    <div className="w-full px-10 py-4">
      <div className="flex gap-2 items-center">
        <HiStar className="text-gray-400" />
        <h1 className="text-xs text-gray-400 text-center">{dateString}</h1>
      </div>
      <div id="editorjs"></div>
    </div>
  )
}

export default CreateNote
