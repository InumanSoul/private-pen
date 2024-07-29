import Container from '@renderer/components/container'

const Settings = (): JSX.Element => {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p>Personalize your experience</p>
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
