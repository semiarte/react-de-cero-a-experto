

// eslint-disable-next-line react/prop-types
export const TodoItem = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{ todo.description }</span>
        {/* JSON.stringify({todo.done}) */}
        <button className="btn btn-danger">Borrar</button>
    </li>
  )
}
