import React from 'react'
import "../styles/gifItem.css"



const Loading = ({ message }) => {
    return (
        <div className="card-grid">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading
