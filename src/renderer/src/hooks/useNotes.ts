import { connection } from './useDatabase'

interface UseNotesProps {
  getNotes: () => Promise<unknown[]>
  getNoteDetails: (id: number) => Promise<unknown>
  insertNote: (data: unknown) => Promise<void>
}

const useNotes = (): UseNotesProps => {
  const getNotes = async (): Promise<unknown[]> => {
    const notes = await connection.select({
      from: 'Notes'
    })

    return notes
  }

  const getNoteDetails = async (id: number): Promise<unknown | null> => {
    const note: unknown[] = await connection.select({
      from: 'tblNotes',
      where: {
        Id: id
      }
    })

    return note.length > 0 ? note[0] : null
  }

  const insertNote = async (data): Promise<void> => {
    console.log('Note start to insert data')
    await connection
      .insert({
        into: 'Notes',
        values: [data]
      })
      .finally(() => {
        console.log('Note data inserted')
        return { success: true, message: 'Note data inserted' }
      })
  }

  return {
    getNotes,
    getNoteDetails,
    insertNote
  }
}

export default useNotes
