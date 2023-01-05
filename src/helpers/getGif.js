export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=1cmtYmeIB5sUau5BF1K0r9pr5N0pAS6k&q=${category}&limit=10`

    const resp = await fetch(url)
    const { data } = await resp.json()

    const gif = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    // console.log(data)
    // console.log(gif)
    return gif;

}