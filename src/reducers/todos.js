const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.data.id,
          text: action.payload.data.text,
          completed: false
        }
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'GET_TODOS':
      return state.concat(action.payload.data)
    default:
      return state
  }
}

export default todos
