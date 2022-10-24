import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

  const [input, setInput] = useState('')

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (input.trim().length <= 1) return; //Validar que el input tenga minimo una letra o caracter

    // setCategorias(categoriasState => [input, ...categoriasState]); //Si mandamos un callback en el setCategorias, este recupera el estado actual 😮
    onAddCategory(input.trim()); //trim elimina los espacios en blanco
    setInput('')
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          value={input}
          placeholder='Busca tu gif'
          onChange={handleInputChange}
        />
      </form>
    </>
  )
}

// export default AddCategory