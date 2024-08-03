import { connection } from './useDatabase'

interface UseUsersProps {
  getUsers: () => Promise<unknown[]>
  getUserDetails: (id: number) => Promise<unknown>
  insertUser: (data: unknown) => Promise<void>
}

export interface UserDataProps {
  Id: number
  Name: string
  CreatedAt: Date
  UpdatedAt: Date
}

const useUsers = (): UseUsersProps => {
  const getUsers = async (): Promise<unknown[]> => {
    const users = await connection.select({
      from: 'User'
    })

    return users
  }

  const getUserDetails = async (id: number): Promise<UserDataProps | null> => {
    const user: UserDataProps[] = await connection.select({
      from: 'User',
      where: {
        Id: id
      }
    })

    return user.length > 0 ? user[0] : null
  }

  const insertUser = async (data): Promise<void> => {
    console.log('User start to insert data')
    await connection
      .insert({
        into: 'User',
        values: [data]
      })
      .finally(() => {
        console.log('User data inserted')
        return { success: true, message: 'User data inserted' }
      })
  }

  return {
    getUsers,
    getUserDetails,
    insertUser
  }
}

export default useUsers
