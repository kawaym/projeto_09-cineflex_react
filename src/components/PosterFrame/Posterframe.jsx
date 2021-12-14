import "./Posterframe.css"

export default function Posterframe({size, url}){
    return(
        <div className="poster-frame">
            <img src={url} alt="Pôster" className={`poster-${size}`} />
        </div>
    )
}