import React from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
  
  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {loading && <p>loading</p>}
    <div className="card-grid">
      {images.map(image => (
        <GifGridItem 
          key={image.id} 
          {...image}
        />
      ))}
    </div>
    </>
  )
}
