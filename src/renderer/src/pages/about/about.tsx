import Container from '@renderer/components/container'

const About = (): React.ReactNode => {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Private Pen App</h1>
        <p className="text-gray-600">Version 1.0.0</p>
        <div className="text-xs text-gray-600">
          This is a simple diary app built with <span className="react">React</span>
          &nbsp;and <span className="ts">TypeScript</span>
        </div>
      </div>
    </Container>
  )
}

export default About
