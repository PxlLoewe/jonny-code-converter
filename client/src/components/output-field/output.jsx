import React, { useState, useEffect } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import "./output.css"

export default function Output(props) {

    const [copied, setCopied] = useState(false)

    const copyText = () => {
        navigator.clipboard.writeText(props.convertedText)
            .then(() => {
                setCopied(true)
            })
            .catch(() => {
                setCopied(false)
            })
    }
    const DownloadBtn = () => {
        const file = new Blob([props.convertedText], { type: "text/plain" });
        const downloadLink = URL.createObjectURL(file)
        return (
            <a download={props.fileName ? props.fileName + ".ram" : "programm.ram"} href={downloadLink}>
                <button className="download-btn">Download</button>
            </a>
        )
    }
    useEffect(() => {
        setCopied(false)
    }, [props.convertedText])
    return (
        <div className="output">
            <h3>output</h3>
            <h1>{props.changeIcon}</h1>
            <div className="text">
                <button className={copied ? "bg-green copy" : "copy"} onClick={copyText}>{copied ? <DownloadDoneIcon /> : <ContentCopyIcon />}</button>
                {props.convertedText && props.convertedText.error ? <div className="error"><div className="message">{props.convertedText.error.message}</div><div className="line">{props.convertedText.error.line.join(" ")}</div></div> : <span>{props.convertedText}</span>}
            </div>
            <DownloadBtn />
        </div>
    )
}
