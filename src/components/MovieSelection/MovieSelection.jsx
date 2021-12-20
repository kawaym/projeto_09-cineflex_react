import axios from 'axios';
import { useEffect, useState } from 'react';
import Pageframe from '../Pageframe/Pageframe';
import Posterframe from '../PosterFrame/Posterframe';
import './MovieSelection.css';

export default function MovieSelection(){
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
                    {posterList.map((image) => <Posterframe size='big' url={image.posterURL} key={image.id}/>)}
                </div>
            </Pageframe>
        </>
    );
}