import React from 'react'



const Loading = ({ message }) => {
    return (
        <div className="card-grid">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 style={{margin: '4px'}}>

                    {message}

                </h5>
            </div>
        </div>
    )
}

export default Loading
