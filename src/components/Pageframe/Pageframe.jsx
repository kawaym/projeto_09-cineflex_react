import DateSelection from '../DateSelection/DateSelection';
import MovieSelection from '../MovieSelection/MovieSelection';
import PlaceSelection from '../PlaceSelection/PlaceSelection';
import Posterframe from '../PosterFrame/Posterframe';
import SuccessPage from '../SuccessPage/SuccessPage';
import './Pageframe.css';
export default function Pageframe({pageFooter, pageTitle, children}){
    const [title, posterURL] = pageFooter;
    const footer =  <footer className="order-summary">
                        <Posterframe size="small" url={posterURL}/>
                        <div className="order-info">
                            <div className="order-title">
                                {title}
                            </div>
                            {/* <div className="order-date">
                                Quinta-feira - 15:00
                            </div> */}
                        </div>
                    </footer>;
    return (
        <>
            <header className="logo">
                CINEFLIX
            </header>
            <main className={`page-content ${(pageTitle === "movieSelection" || pageTitle === "dateSelection") ? 'selection' : ''}`}>
                <h1 className={`page-title`}>
                    {pageTitle === "movieSelection" && "Selecione o filme"}
                    {pageTitle === "dateSelection" && "Selecione o horário"}
                </h1>
                {children}
            </main>
            {pageFooter === '' ? '' : footer}
        </>
    );
}