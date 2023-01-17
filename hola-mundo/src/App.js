import logo from './logo.svg';
import './App.css';
import MiComponeteConContexto from './hooks/Ejemplo3';

import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Component propio Greeting.jsx */}
        {/*<Greeting name="Cristian"></Greeting>*/}
        
        {/*<ContactListComponent></ContactListComponent>*/}
        {/*<ContactListComponent></ContactListComponent>*/}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        
        <MiComponeteConContexto></MiComponeteConContexto>
      </header>
    </div>
  );
}

export default App;
