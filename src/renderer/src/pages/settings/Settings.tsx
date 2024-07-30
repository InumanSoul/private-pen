import Container from '@renderer/components/container'
import { useState } from 'react'
import useDatabase from '@renderer/models/useDatabase'

const Settings = (): JSX.Element => {
  const [username, setUsername] = useState('')
  const { insertData } = useDatabase()

  const handleUserData = (): void => {
    const value = {
      Name: username,
      CreatedAt: new Date().getTime(),
      UpdatedAt: new Date().getTime()
    }

    console.log('User data', value)
    insertData({
      table: 'User',
      data: value
    })
  }
  return (
    <Container>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p>Personalize your experience</p>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="username"
          value={username}
          className="border rounded-lg px-2 py-1"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleUserData} className="bg-cyan-400 px-2 py-1 rounded-lg w-fit">
          Save
        </button>
      </div>
      <div className="mt-2">
        <div className="flex">
          <div className="w-1/2">
            <h2 className="text-lg font-bold">Appearance</h2>
            <p>Choose your theme</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-lg font-bold">Account</h2>
            <p>Manage your account</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Settings
