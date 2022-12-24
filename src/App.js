import { useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItemFrom from './components/AddItemForm';

function App() {
  const [items, setItem] = useState([]);

  const [ newItem, setNewItem] = useState();

function handleSubmit(event) {
    event.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
}

function addItem(item) {
  const id = items.length ? items[items.length -1].id +1 : 1;
  const myNewItem = { 'id': id, 'isChecked': false, 'body': item}
  const listItem = [...items, myNewItem];
  setItem(listItem);
}

  return (
    <div className="App">

      <Header items={items} setItem={setItem} />
      <AddItemFrom
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content items={items} setItem={setItem} />
      <Footer items={items}/>
    </div>
  );
}

export default App;
