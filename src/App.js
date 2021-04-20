import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';


function App(props) {
  const { onHello } = props;

  return (
    <div className="App" onClick={onHello}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Button type="primary">PRESS ME</Button>
          <DatePicker placeholder="select date" />
      </header>
    </div>
  );
}

export default App;
