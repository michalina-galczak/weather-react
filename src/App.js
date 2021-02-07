import './App.css';
import Form from './Form.js';
import Location from './Location.js';
import Weather from './Weather.js';
import Forecast from './Forecast.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <Form />
          <Location city="Lisbon" weatherDesc="Raining" />
          <Weather temp="12" high="14" low="8" precipitation="93" windSpeed="32.6" />
          <Forecast />
        </div>
        <div>
          <a href="https://github.com/michalina-galczak/weather-react" target="_blank">Coded by Michalina Galczak</a>
        </div>
      </header>
    </div>
  );
}

export default App;
