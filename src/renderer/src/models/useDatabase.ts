import { Connection } from 'jsstore'
import workerInjector from 'jsstore/dist/worker_injector'
import { tblNotes, tblUser } from './tables'

interface UseDatabaseProps {
  createDatabase: () => Promise<void>
  insertData: ({ data, table }: { data: unknown; table: string }) => Promise<void>
}

const useDatabase = (): UseDatabaseProps => {
  const connection = new Connection()
  connection.addPlugin(workerInjector)

  const createDatabase = async (): Promise<void> => {
    const db = {
      name: 'PrivatePencil',
      tables: [tblNotes, tblUser]
    }

    const isDbCreated = await connection.initDb(db)

    if (isDbCreated) {
      console.log('Db Created & connection is opened')
    } else {
      console.log('Connection is opened')
    }
  }

  const insertData = async ({ data, table }): Promise<void> => {
    console.log('Data to insert:', data)
    await connection
      .insert({
        into: table,
        values: data
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        return console.log('Data inserted successfully')
      })
  }

  return {
    createDatabase,
    insertData
  }
}

export default useDatabase
