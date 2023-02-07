import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"
import { getGifs } from "../src/helpers/getGif"
import { useFetchGifs } from "../src/hooks/useFetchGifs"

jest.mock("../src/hooks/useFetchGifs")

describe('Prueba en <GifExpertApp/>', () => {

    const gifsSearch = 'React JS'

    test('debe contener el input para la busqueda', () => {


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


        render(<GifExpertApp />)
        const input = screen.getByLabelText('input-gif')

        fireEvent.input(input, { target: { value: gifsSearch } })
        // screen.debug()

        expect(input.value).toBe(gifsSearch)

    })

    test('debe validar que no se repita la misma busqueda', async () => {
        const menssageError = 'Ya existe este Gif'
        jest.spyOn(window, 'alert').mockImplementation(() => { });

        const gifs = await getGifs(gifsSearch)

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })


        render(<GifExpertApp />)

        const input = screen.getByLabelText('input-gif')

        const form = screen.getByLabelText("form")

        fireEvent.input(input, { target: { value: gifsSearch } })
        fireEvent.submit(form)

        fireEvent.input(input, { target: { value: gifsSearch } })
        fireEvent.submit(form)


        expect(window.alert).toBeCalledWith(menssageError);
    })


})
