import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'One Punch'])

    const onAddCategory = ( NewCategory ) => {
        if(categories.includes(NewCategory)) return
        setCategories([NewCategory, ...categories])
    }

    return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
            onNewCategory = { value => onAddCategory(value)}
            // setCategories={ setCategories} 
        />
        {/* Listado de Gif */}
            {/* Gif Item */}
            {categories.map((category) => (
                < GifGrid 
                    key={category} 
                    category={category}
                />
            ))}
    </>
  )
}
