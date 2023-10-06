import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent/>
    </div>
  );
}

export default App;


function MyComponent (){
  return(
  <div>
    <h1>Hello from the reusable component</h1>
    <button>LIKE!</button>
  </div>
  )
}