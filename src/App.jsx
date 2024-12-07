import { useState } from "react"
import "./style.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefult()
    
    setTodos([todos,])
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value= {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
      <button className="btn">Add</button>
    </div>
  </form>
  <h1 className="header">ToDo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox" />
        ITEM 1
      </label>
      <button className="btn btn-danger">DELETE</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        ITEM 1
      </label>
      <button className="btn btn-danger">DELETE</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        ITEM 1
      </label>
      <button className="btn btn-danger">DELETE</button>
    </li>
  </ul>
  </>
  )
}
