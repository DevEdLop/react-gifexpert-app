import { useState } from "react"
import PropTypes from 'prop-types'
export const AddCategories = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form
            aria-label="form"
            onSubmit={onSubmit}>
            <input
                aria-label="input-gif"
                type={'text'}
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategories.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

