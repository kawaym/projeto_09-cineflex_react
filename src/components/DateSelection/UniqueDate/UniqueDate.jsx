import { Link } from 'react-router-dom';
import './UniqueDate.css';

export default function UniqueDate({weekday, date, showtimes, userOrder, setUserOrder }){
    return(
        <div className="container-date">
            <h1 className="date">
                {weekday} - {date}
            </h1>
            <div className="container-buttons">
                {showtimes.map((showtime) => {
                return(
                    <Link to={`/assentos/${showtime.id}`} key={showtime.id} onClick={() => setUserOrder({...userOrder, movieHour:  showtime.name, movieDate: date})}>
                        <button 
                        className="select-hour" 
                        type="button"
                        >
                            {showtime.name}
                        </button>
                    </Link>
                )})}
            </div>
        </div>
    );
}