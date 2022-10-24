
import { useFetchGifs } from '../hooks/useFetchGifs.js';
import './GifGrid.css'
import GifItem from './GifItem.jsx';

export const GifGrid = ({ categoria }) => {

  const { gifs, isLoading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>

      <div className='card-grid'>
        {
          gifs.map(gif => (
            isLoading ?
              (<div key={gif.id} className='lds-ring'><div></div><div></div><div></div><div></div></div>)
              :
              (<GifItem
                key={gif.id}
                {...gif} //Para esparcir todo lo que trae 'gif' en las props
              />))
          )

        }
      </div>
    </>
  )
}

export default GifGrid