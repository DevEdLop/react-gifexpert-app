import { render, screen } from "@testing-library/react"
import { GifItem } from '../../src/components'
describe('Prueba a <GrifItem/>', () => {
    const title = 'Dragon Ball';
    const url = 'https://giphy.com/gifs/TOEIAnimationUK-goku-dragon-ball-super-19JSJ5ucu91R5D7a3w';
    test('debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()

    })

    test('debe de mostrar la imagen con el URL y ALT indicado', () => {

        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img')

        expect(src).toBe(url)
        expect(alt).toBe('yatusabe')
        // screen.debug()

    })

    test('debe de mostrar el titulo en el componente', () => {

        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy()
    })

})
