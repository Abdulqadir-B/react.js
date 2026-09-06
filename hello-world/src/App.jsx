import './App.css'

function Greet() {
  return <h2>Hello, I am Abdul Qadir</h2>
}

function Button() {
  return <button>Click Me</button>
}

function App() {
  return (
    <>
      <h1>Started Learning React !</h1>
      <Greet />
      <Button />
    </>
  )
}

export default App