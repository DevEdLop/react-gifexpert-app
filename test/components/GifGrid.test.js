import { render, screen } from "@testing-library/react"
import { GifGrid } from '../../src/components'
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


jest.mock("../../src/hooks/useFetchGifs")
describe('Prueba a <GifGrid/>', () => {
    const category = 'Dragon Ball'
    test('debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)

        // screen.debug()
        expect(screen.getByRole('heading', { name: 'Generando...' })).toBeTruthy()
        expect(screen.getByText(category))

    })

    test('debe de mostrar items cuando se cargan las imagenes con el useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABCDEFGHIJKLMNOPQRSTU',
                title: 'Gokun',
                url: 'http://localhost:Gokun.jpg'
            },
            {
                id: '1234b2as',
                title: 'saitama',
                url: 'http://localhost:saitama.jpg'
            }

        ]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category} />)
        // screen.debug()


        expect(screen.getAllByRole('img').length).toBe(2)
    })


})
