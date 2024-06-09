import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import NewProduct from '../../pages/NewProduct';
import AllProductList from '../../pages/AllProductList'
import DetailProduct from '../../pages/DetailProduct';
import UpdateProduct from '../../pages/UpdateProduct'
import axios from 'axios';
import './App.css';

function App() {

  const [collectionItems, setCollectionItems] = useState([]);
    useEffect(() => {
        const apiCall = async () =>{
            await axios.get("http://localhost:8000/api/product/all")
                .then((data) => {
                    setCollectionItems(data.data)
                })
                .catch(err => console.log(err))
        }
        apiCall()
    }, [])

    const newItem = (item) => {
      setCollectionItems([...collectionItems, item]);
    }
    const deleteItem = (id) => {
      setCollectionItems(collectionItems.filter((e) => e._id !== id));
    }
    const updateItem = (id, updatedItem) => {
      setCollectionItems((oldItems) => 
          oldItems.map((item) => 
              item._id === id ? { ...item, ...updatedItem } : item
          )
      );
  };
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<NewProduct newItem={newItem} collectionItems={collectionItems} deleteItem={deleteItem}/> }/>
        <Route path="/products" element={<AllProductList collectionItems={collectionItems} deleteItem={deleteItem}/>}/>
        <Route path="/:id" element={<DetailProduct collectionItems={collectionItems}/>}/>
        <Route path="/update/:id" element={<UpdateProduct updateItem={updateItem}/> }/>
      </Routes>
    </div>
  );
}

export default App;
