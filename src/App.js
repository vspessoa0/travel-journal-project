import React from 'react';
import './App.css';
import data from './data';

import { Navbar, Card } from './components'

const App = () => {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  )
}

export default App