import Header from "./components/Header";
import './App.css'
import Cart from "./components/Cart";
import { useContext, useEffect } from "react";
import CartContext from "./store/cart-context";
import Form from "./components/Form";

function App() {
  const ctx = useContext(CartContext)
  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const data = await res.json()

        ctx.items= data;
  }
  fetchData();

},[ctx])

  console.log(ctx);
  return (
    <CartContext.Provider value={ctx}>
      <div className="main-items">
        <Header/>
        <Form/>
        {ctx.items.map(todo=>(
          <Cart title={todo.title} completed={todo.completed}/>
          ))}
      </div>
    </CartContext.Provider>
  );
}

export default App;
