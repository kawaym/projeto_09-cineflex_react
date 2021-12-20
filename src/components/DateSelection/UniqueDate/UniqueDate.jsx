import './UniqueDate.css';

export default function UniqueDate({weekday, date, showtimes}){
    console.log(showtimes)
    return(
        <div className="container-date">
            <h1 className="date">
                {weekday} - {date}
            </h1>
            <div className="container-buttons">
                {showtimes.map((showtime) => <button 
                                                className="select-hour" 
                                                type="button"
                                                key={showtime.div}
                                                >
                                                  {showtime.name}
                                              </button>)}
            </div>
        </div>
    );
}