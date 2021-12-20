import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Pageframe from "../Pageframe/Pageframe";
import UniqueDate from "./UniqueDate/UniqueDate";

export default function DateSelection(){
    const {idFilme} = useParams();

    const [sessoes, setSessoes] = useState([]);
    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promise.then((resposta) => setSessoes(resposta.data));
    }, []);
    if (sessoes.days === undefined){
        return (
            <div>carregando</div>
        );
    };
    return(
        <Pageframe pageFooter={[sessoes.title, sessoes.posterURL]} pageTitle='dateSelection'>
            <div className="container-dates">
                {sessoes['days'].map((session) => <UniqueDate key={session.id} weekday={session.weekday} date={session.date} showtimes={session.showtimes}/>)}
            </div>
       </Pageframe>
    );
}