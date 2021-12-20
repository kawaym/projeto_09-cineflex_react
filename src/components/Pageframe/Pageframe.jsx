import DateSelection from '../DateSelection/DateSelection';
import MovieSelection from '../MovieSelection/MovieSelection';
import PlaceSelection from '../PlaceSelection/PlaceSelection';
import Posterframe from '../PosterFrame/Posterframe';
import SuccessPage from '../SuccessPage/SuccessPage';
import './Pageframe.css';
export default function Pageframe({pageFooter, pageTitle, children, date = '', hour = ''}){
    const [title, posterURL] = pageFooter;
    const footer =  <footer className="order-summary">
                        <Posterframe size="small" url={posterURL}/>
                        <div className="order-info">
                            <div className="order-title">
                                {title}
                            </div>
                            <div className="order-date">
                                {date} {date && '-'} {hour}
                            </div>
                        </div>
                    </footer>;
    return (
        <>
            <header className="logo">
                CINEFLIX
            </header>
            <main className={`page-content ${(pageTitle === "placeSelection" || pageTitle === "dateSelection") ? 'selection' : ''}`}>
                <h1 className={`page-title`}>
                    {pageTitle === "movieSelection" && "Selecione o filme"}
                    {pageTitle === "dateSelection" && "Selecione o horário"}
                    {pageTitle === "placeSelection" && "Selecione o(s) assento(s)"}
                </h1>
                {children}
            </main>
            {pageFooter === '' ? '' : footer}
        </>
    );
}