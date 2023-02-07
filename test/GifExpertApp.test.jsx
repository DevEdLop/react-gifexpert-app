import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Prueba en <GifExpertApp/>', () => {
    test('debe contener el input para la busqueda', () => {
        const gifsSearch = 'React JS'

        render(<GifExpertApp />)
        const input = screen.getByLabelText('input-gif')

        fireEvent.input(input, { target: { value: gifsSearch } })
        // screen.debug()

        expect(input.value).toBe(gifsSearch)

    })

    test('debe validar que no se repita la misma busqueda', () => {

        const gifsSearch = 'React JS'

        render(<GifExpertApp />)
        const input = screen.getByLabelText('input-gif')
        const form = screen.getByLabelText("form")
        fireEvent.input(input, { target: { value: gifsSearch } })
        screen.debug(form) 
        fireEvent.submit(form)


        // expect(input.value).toBe(gifsSearch)
    })


})
