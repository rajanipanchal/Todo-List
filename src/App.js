import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import { TodoProvider } from "./Components/Context/TodoContext";
import { useState } from "react";

function App() {


  return (
<TodoProvider>
<div className="container p-5">
    <Navbar/>
    <Form/>
   <div className="Container">
    <ListGroup/>
   </div>
</div>
</TodoProvider>
  );
}

export default App;
