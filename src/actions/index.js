import axios from 'axios'


export function addTodo(text) {
  return function(dispatch){
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/todos',
      data: {
        completed:false,
        text: text
      }
    })
    .then((response) => {
      dispatch({
         type: 'ADD_TODO',
         payload: response,
         text,
       });
     });
  }
}

export function getTodos(){
  return function(dispatch){
    axios.get('http://localhost:8000/api/todos')
    .then((response) => {
      dispatch({
        type: 'GET_TODOS',
        payload: response
      })
    })
  }
}

export const setVisibilityFilter = (filter) =>({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export function toggleTodo(todo){
  return function(dispatch){
      axios({
        method: 'PUT',
        url: 'http://localhost:8000/api/todos/'+todo.id,
        data:{
          text: todo.text,
          completed:!todo.completed,
        }
      }).then((response) =>{
        dispatch({
          type: 'TOGGLE_TODO',
          id:response.id
        })
      })
    }
}

export function deleteTodo(id){
  return function(dispatch){
    axios.delete('http://localhost:8000/api/todos/'+ id)
    .then((response) => {
      dispatch({
        type: 'DELETE_TODO',
        id
       });
     });
  }
}
