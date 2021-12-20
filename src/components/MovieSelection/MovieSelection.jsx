import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pageframe from '../Pageframe/Pageframe';
import Posterframe from '../PosterFrame/Posterframe';
import './MovieSelection.css';

export default function MovieSelection({ userOrder, setUserOrder }){
    const [posterList, setPosterList] = useState([]);
    useEffect(() =>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promise.then((resposta) => setPosterList(resposta.data));
    }, []);
    if (posterList === undefined){
        return (
            <div>carregando</div>
        )
    };
    return(
        <>
            <Pageframe pageFooter='' pageTitle='movieSelection'>
                <div className="container-posters">
                    {posterList.map((image) => {
                      return(  
                        <Link  to={`/sessoes/${image.id}`} key={image.id} onClick={() => setUserOrder({...userOrder, movieTitle: image.title})}>
                            <Posterframe size='big' url={image.posterURL}/>
                        </Link> 
                      )
                    })}
                </div>
            </Pageframe>
        </>
    );
}