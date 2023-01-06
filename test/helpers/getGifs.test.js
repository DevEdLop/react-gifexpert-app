import { getGifs } from "../../src/helpers/getGif"

describe('Pruenas en getGifs()', () => {
    test('debe de retornar un arreglo de gisf', async() => {
        const gifs = await getGifs('One Punch')
        // console.log(gifs)
        // console.log(gifs[0])
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
    
})
