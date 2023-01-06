import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategories } from '../../src/components'
describe('Prueba a <AddCategories/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        const onNewCategory = jest.fn()

        render(<AddCategories onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Dragon Ball' } });

        expect(input.value).toBe('Dragon Ball');

        // screen.debug()
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn()

        const inputValue = 'Dragon Ball';
        render(<AddCategories onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)

        // screen.debug()

        expect(input.value).toBe("")
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)


    })

    test('no debe de llamar al onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn()

        const inputValue = '';
        render(<AddCategories onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)

        // screen.debug()

        expect(input.value).toBe("")
        expect(onNewCategory).not.toHaveBeenCalled()
        expect(onNewCategory).not.toHaveBeenCalledTimes(1)
    })


})
