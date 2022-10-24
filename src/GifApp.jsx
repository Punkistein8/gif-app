import { useState } from "react"
import {AddCategory, GifGrid} from "./components"; //Simplificando la implementacion con archivos de barril


const GifApp = () => {

  const [categorias, setCategorias] = useState(['Dragon Ball Super']);

  const onAddCategory = nuevaCategoria => {
    if (categorias.includes(nuevaCategoria)) return;

    setCategorias([nuevaCategoria, ...categorias]);
  }

  return (
    <>
      <h1>Gif Fetch App</h1>

      <AddCategory
        // setCategorias={setCategorias}
        onAddCategory={onAddCategory} //Cuando lleva 'on' es porque emite un valor, estamos enviando una funcion como prop
      />

      {categorias.map((categoria) => (
        <GifGrid
          key={categoria}
          categoria={categoria}
        />
      ))} {/*Enviando el segundo argumento de map que es el indice de recorrido*/}

    </>
  )
}

export default GifApp