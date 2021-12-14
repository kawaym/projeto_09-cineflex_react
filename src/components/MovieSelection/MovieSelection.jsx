import Posterframe from '../PosterFrame/Posterframe';
import './MovieSelection.css';

export default function MovieSelection(){
    const  posterList = [
        {
            id: 1,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
        {
            id: 2,
            title: "Welcome to Sudden Death",
            posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
            overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
            releaseDate: "2020-09-29T00:00:00.000Z",
        },
    ]
    return(
        <>
            <div className="container-posters">
                {posterList.map((image) => <Posterframe size='big' url={image.posterURL}/>)}
            </div>
        </>
    );
}