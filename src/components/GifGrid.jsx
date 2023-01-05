import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import Loading from "./Loading";



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {isLoading && (
                <Loading message={'Cargando'} />
            )}
            <div className="card-grid">

                {
                    images.map((image) => (

                        <GifItem
                            key={image.id}
                            {...image}
                        />)
                    )
                }
            </div>



        </>
    )
}