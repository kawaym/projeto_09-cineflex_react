import DateSelection from '../DateSelection/DateSelection';
import MovieSelection from '../MovieSelection/MovieSelection';
import PlaceSelection from '../PlaceSelection/PlaceSelection';
import Posterframe from '../PosterFrame/Posterframe';
import './Pageframe.css';
export default function Pageframe({children}){
    const footer =  <footer className="order-summary">
                        <Posterframe size="small" url="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                        <div className="order-info">
                            <div className="order-title">
                                Enola Holmes
                            </div>
                            <div className="order-date">
                                Quinta-feira - 15:00
                            </div>
                        </div>
                    </footer>;
    return (
        <>
            <header className="logo">
                CINEFLIX
            </header>
            <main className="page-content">
                <h1 className={`page-title`}>
                    Selecione o Filme
                </h1>
                <PlaceSelection/>
            </main>
            {footer}
        </>
    );
}