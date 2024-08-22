import logo from "./logo.svg";
import "./App.css";
import SetTest from './news/setOperations';
import GroupByTest from "./news/groupBy";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`origins: A,B,C and C,D,E`}</p>
        <SetTest />
        <GroupByTest />
      </header>
    </div>
  );
}

export default App;
