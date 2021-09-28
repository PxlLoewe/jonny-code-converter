import React from 'react'
import "./output.css"

export default function Output() {
    return (
        <div className="output">
            <h3>output</h3>
            <div className="output-field">
                <div className="output-text">
                    <button className="copy-button">copy</button>
                    text<br></br>dsadastext<br></br>dsadastext<br></br>dsadastext<br></br>dsadas
                </div>
            </div>
            <div className="download-wrapper">
                <button className="download-button">Download</button>
            </div>
        </div>
    )
}
