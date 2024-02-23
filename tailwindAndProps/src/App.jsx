import './App.css';
import Card from "./components/Card.jsx";
function App() {

  return (
   <>
   <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind</h1>
    <Card username="User-1" btnVal="About user-1"></Card>
    <Card username="user-2" btnVal= "About user-2"></Card>
    <Card username="Sam">hello</Card>
   </>
  )
}

export default App
