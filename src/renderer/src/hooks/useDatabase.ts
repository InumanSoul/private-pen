import { Connection } from 'jsstore'
import workerInjector from 'jsstore/dist/worker_injector'
import { tblNotes, tblUser } from './tables'

interface UseDatabaseProps {
  initDatabase: () => Promise<void>
  dbName: string
}

export const connection: Connection = new Connection()
connection.addPlugin(workerInjector)

const useDatabase = (): UseDatabaseProps => {
  const dbName = 'PrivatePencil'
  const db = {
    name: dbName,
    tables: [tblNotes, tblUser]
  }

  const initDatabase = async (): Promise<void> => {
    const isDbCreated = await connection.initDb(db)

    if (isDbCreated) {
      console.info('Db Created & connection is opened')
    } else {
      console.info('Connection is opened')
    }
  }

  return {
    dbName,
    initDatabase
  }
}

export default useDatabase
