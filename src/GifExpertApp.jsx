import { useState } from "react"
import { AddCategories, GifGrid } from "./components"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategories = (newCategory) => {
        if (categories.find(item => item.toLowerCase() === newCategory.toLowerCase())) return alert('Ya existe esta wea');
        setCategories([newCategory, ...categories])

    }

    // console.log(categories)
    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategories
                onNewCategory={onAddCategories}
            />
            {
                categories.map((item) => (
                    <GifGrid
                        key={item}
                        category={item}
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp