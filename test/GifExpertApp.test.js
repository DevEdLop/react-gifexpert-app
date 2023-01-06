import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Prueba en <GifExpertApp/>', () => {
    test('debe contener el input para la busqueda', () => {
        const gifsSearch = 'Dragon Ball'

        render(<GifExpertApp />)
        const input = screen.getByLabelText('input-gif')

        fireEvent.input(input, { target: { value: gifsSearch } })
        // screen.debug()

        expect(input.value).toBe(gifsSearch)

    })

})
