import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <div className='main'>
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
