import { connect }                          from 'react-redux'
import { toggleTodo, deleteTodo, getTodos } from '../actions'
import   TodoList                           from '../components/TodoList'

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return 'Unknown filter: ' + filter
      
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onDeleteTodo: deleteTodo,
  onGet: getTodos
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
