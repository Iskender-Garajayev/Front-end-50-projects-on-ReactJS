import './App.css';

const api = {
  key: "596c6698365acc592da169885f95b3aa",
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getData();
    let month = months[d.getMonth()];
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <main>
        <div className="search_box">
          <input type="text" className='search_bar' placeholder="Search..." />
        </div>
        <div className="location_box">
          <div className="location">Yoloten</div>
          <div className="data">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
