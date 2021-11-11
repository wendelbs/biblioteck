import logo from './logo.svg';
import './App.css';
import PanelLeft from './components/PanelLeft/PanelLeft';
import PanelRight from './components/PanelRight/PanelRight';

function App() {
  return (
    <div className="App">
      <PanelLeft />
      <PanelRight />
    </div>
  );
}

export default App;
