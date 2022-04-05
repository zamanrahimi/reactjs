
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {

const title ="First ReactJs Application";
    return ( 
        <div className = "App" >
        <h1>{title} </h1>
        <Navbar/> 


        <div className = 'content'>
              <Home/>
        </div>



        </div>
    );
}

export default App;