import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  // const categories = ['one punch', 'samuari', 'pokemon'];
  const [categories, setCategories] = useState(['one punch'])

  // const handleAdd = (e) => {
  //   setCategories([...categories, 'mija']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/> 
      <hr />
      {/* <button onClick={handleAdd}>agregar</button> */}
      <ol>
        {
          categories.map((category, i) => 
            <GifGrid 
              key={category} 
              category={category}
            />)
        }
      </ol>
    </>
  )
}
