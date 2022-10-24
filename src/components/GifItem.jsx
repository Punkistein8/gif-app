
const GifItem = ({ id, title, img }) => {
  return (
    <>
      <div className='card' key={id}>
        <img src={img} />
        <p>{title}</p>
      </div>
    </>

  )
}

export default GifItem