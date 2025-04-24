import { useForm } from "../../hooks/useForm"

export const TodoForm = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = () => {
    event.preventDefault();
    if( description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }

    onNewTodo(newTodo);
    onResetForm();
  }
  return (
    <>
        {/* TodoForm onNewTodo( todo ) */}
        {/* id, description, done */}
          <form onSubmit={onFormSubmit}>
              <input
                  type="text"
                  className="form-control"
                  placeholder="¿Qué hay que hacer?"
                  name="description"
                  value={description}
                  onChange={onInputChange}
              />
              <button
                  type="submit"
                  className="btn btn-primary mt-2">
                  Agregar
              </button>
          </form>
        {/* Fin TodoForm */}
    </>
  )
}
