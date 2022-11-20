import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetFightQuery } from './store/rpgApi'

function App() {

    const data = useGetFightQuery()
    console.log(data)

  return (
    <div className="App">
      <header className="App-header">
              <p>
                  {data.data?.data?.map(e => e.name )}
        </p>
      </header>
    </div>
  );
}

export default App;
