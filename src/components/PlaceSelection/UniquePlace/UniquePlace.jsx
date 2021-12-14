import "./UniquePlace.css";

export default function UniquePlace({ status, number }){
    return(
        <button type="button" className={`place ${status}`}>
            {number}
        </button>
    );
}