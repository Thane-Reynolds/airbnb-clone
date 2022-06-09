import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'
import { Card } from './components/Card'
import { data } from './data'

function App() {
  const dataElements = data.map(data => {
  //   let availability;
  //   if (data.openSpots === 0){
  //     availability = "SOLD OUT"
  //   } else {
  //     availability = "Online"
  //   }
    return(
        <Card 
          key={data.id}
          {...data} // this is spreading the properties versus passing data down as data={data}
           />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Hero />
        <div className="slider">
          {dataElements}
        </div>
      </main>
    </div>
  );
}

export default App;
