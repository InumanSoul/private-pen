import Container from '@renderer/components/container'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import { useEffect, useRef } from 'react'

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'This is my awesome editor!',
        level: 1
      }
    }
  ]
}

const CreateNote = (): JSX.Element => {
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
        const content = await editor.saver.save()

        console.log(content)
      },
      autofocus: true,
      tools: {
        header: Header
      },
      data: DEFAULT_INITIAL_DATA
    })
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
      <h1 className="text-xs text-gray-400 text-center">{dateString}</h1>
      <div id="editorjs"></div>
    </div>
  )
}

export default CreateNote
