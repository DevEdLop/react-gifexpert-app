import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGif'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    const getImages = async () => {
        const newImages = await getGifs(category)
        
        setTimeout(() => {
            setIsLoading(false)
            setImages(newImages)
        }, 999);

    }
    useEffect(() => {
        getImages()
    }, [])


    return {
        images,
        isLoading
    }
}