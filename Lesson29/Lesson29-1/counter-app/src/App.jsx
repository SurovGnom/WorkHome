import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./features/counter/Counter.jsx";



function App() {


  return (
    <>
        <div className="container">
            <h1>Counter</h1>
            <Counter />
        </div>
    </>
  )
}

export default App
