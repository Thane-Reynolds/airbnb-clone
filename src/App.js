import './App.css';
import './css/navbar.css'
import './css/hero.css'
import './css/card.css'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'
import { Card } from './components/Card'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Hero />
        <div className="slider">
          <Card 
          img="/images/katie-zaferes.png"
          rating={5.0} 
          reviewCount={6} 
          country="USA" 
          title="Life Lessons with Katie Zaferes"
          price={136}
           />
        </div>
      </main>
    </div>
  );
}

export default App;
