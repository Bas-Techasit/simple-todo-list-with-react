import { useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [ Items, setItem ] = useState([
    {
      'id': 1,
      'isChecked': false,
      'content': 'item 1'
    },
    {
      'id': 2,
      'isChecked': false,
      'content': 'item 2'
    },
    {
      'id': 3,
      'isChecked': false,
      'content': 'item 3'
    }
  ]);

  // create add item to the list.


  // create delete item to the list.

  return (
    <div className="App">
      <Header />
      <Content 
        Items = {Items}
        setItem = {setItem}
      />
      <Footer />
    </div>
  );
}

export default App;
