import './Todo.css'


function Todo({title}) {
    console.log(title);

    function deleteTodo(id) {
        console.log('deleteTodo');
    }
  return (
    <div className="todo">
        <p>{title}</p>
      <button onClick={() => deleteTodo(1)}>Delete</button>
    </div>
  );
}

export default Todo;
