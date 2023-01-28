import logo from './logo.svg';

// when importing data, we can import data into any name of variable. 
import data from './Data';
import './App.css';
import List from './List';
import React, {useState} from 'react';

function App() {
  // In this project, 'App' component maintain an state.
  // The state is list of people. 
  const [people,setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} bithdays today.</h3>

        {/* This is how, we pass data into a Component. This data can be
        accessed by the List component via props attribute */}

        <List people={people}/>

        {/* The following shows how to define inline function */}

        <button onClick={() => { setPeople([]) }}>Clear All</button>
      </section>
    </main>
    
  );
}

export default App;
