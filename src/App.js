import './App.css';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/methods-as-props/ParentComponent';
import Person from './components/Person';
import NameList from './components/rendering/NameList';
import StateClassComponent from './components/StateClassComponent';
import StateCounter from './components/StateCounter';

function App() {
  return (
    <div className="App">
      {/* Props */}
      {/* <Person /> */}
      {/* <StateClassComponent /> */}
      {/* <StateCounter /> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent /> */}
      <NameList />
    </div>
  );
}

export default App;
