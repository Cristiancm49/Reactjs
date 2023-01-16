import logo from './logo.svg';
import './App.css';

import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Component propio Greeting.jsx */}
        {/*<Greeting name="Cristian"></Greeting>*/}
        
        <ContactListComponent></ContactListComponent>
        {/*<ContactListComponent></ContactListComponent>*/}
      </header>
    </div>
  );
}

export default App;
