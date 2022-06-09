import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Card } from './components/Card';

let mockData;

mockData = [
   {
      id: '001',
      title: 'Life Lessons with Katie Zaferes',
      person: 'Katie Zaferes',
      country: 'USA',
      price: 136,
      rating: '5.0',
      reviewCount: 6,
      image: 'katie-zaferes.png',
   },
   {
      id: '002',
      title: 'Sport chat with Thane Reynolds',
      person: 'Thane Reynolds',
      country: 'Canada',
      price: 256,
      rating: '4.0',
      reviewCount: 9,
      image: 'katie-zaferes-2.png',
   },
];

function App() {
   return (
      <div className='App'>
         <Navbar />
         <main className='main'>
            <Hero />
            <div className='slider'>
               <ul>
                  {mockData.map((card) => {
                     return (
                        <Card
                           key={card.id}
                           img={card.image}
                           person={card.person}
                           rating={card.rating}
                           reviewCount={card.reviewCount}
                           country={card.country}
                           title={card.title}
                           price={card.price}
                        />
                     );
                  })}
               </ul>
            </div>
         </main>
      </div>
   );
}

export default App;
