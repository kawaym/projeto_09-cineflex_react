import './UniqueDate.css';

export default function UniqueDate(){
    const times = [
        {
            day: "Quinta-feira - 24/06/2021",
            hours:
            [
                "15:00",
                "19:00",
                "15:00",
                "19:00",
                "15:00",
                "19:00",
                "15:00",
                "19:00",
                "15:00",
                "19:00",
                "15:00",
                "19:00",
                "15:00",
                "19:00",
                "15:00",
                "19:00",
            ]
        },
        {
            day: "Quinta-feira - 24/06/2021",
            hours:
            [
                "15:00",
                "19:00",
            ]
        },
        {
            day: "Quinta-feira - 24/06/2021",
            hours:
            [
                "15:00",
                "19:00",
            ]
        },
    ]
    return(
        <div className="container-date">
            <h1 className="date">
                {times[0].day}
            </h1>
            <div className="container-buttons">
                {times[0].hours.map((hour) => <button 
                                                className="select-hour" 
                                                type="button">
                                                  {hour}
                                              </button>)}
            </div>
        </div>
    );
}