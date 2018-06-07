import React from 'react'
import Footer from './Footer'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div class="content">
      <h1>ToDo List</h1>
    <AddTodoContainer />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
