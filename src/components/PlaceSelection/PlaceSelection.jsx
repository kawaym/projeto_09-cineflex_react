import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { useEffect } from "react/cjs/react.development";
import Pageframe from "../Pageframe/Pageframe";
import "./PlaceSelection.css";
import UniquePlace from "./UniquePlace/UniquePlace";

export default function PlaceSelection({ userOrder, setUserOrder }){
    const {idSessao} = useParams();

    const [sessoes, setSessoes] = useState([]);
    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => setSessoes(resposta.data));
    }, []);
    if (sessoes.seats === undefined){
        return <div>carregando</div>
    }
    return(
        <Pageframe  pageFooter={[sessoes.movie.title, sessoes.movie.posterURL]} pageTitle='placeSelection' date={sessoes.day.date} hour={sessoes.name}>
            <div className="container-places">
                <div className="place-selection">
                    {sessoes.seats.map((place) => <UniquePlace status={place.isAvailable ? 'disponivel' : 'indisponivel'} number={place.name} seatId={place.id} key={place.id}
                                                    userOrder={userOrder} setUserOrder={setUserOrder}/>)}
                </div>
                <div className="place-description">
                    <div className="place-type-container">
                        <UniquePlace 
                        status='selecionado'
                        number=''
                        />
                        <div className="place-type-text">
                            Selecionado
                        </div>
                    </div>
                    <div className="place-type-container">
                        <UniquePlace 
                            status='disponivel'
                            number=''
                        />
                        <div className="place-type-text">
                            Disponível
                        </div>
                    </div>
                    <div className="place-type-container">
                        <UniquePlace 
                            status='indisponivel'
                            number=''
                        />
                        <div className="place-type-text">
                            Indisponível
                        </div>
                    </div>
                </div>
                <div className="buyer-info">
                    <label>Nome do comprador:</label>
                    <input type="text" 
                    className="user-name" 
                    placeholder="Digite seu nome..."
                    value={userOrder.userName}
                    onChange={(e) => setUserOrder({...userOrder, userName: e.target.value})}
                    />
                    <label>CPF do comprador:</label>
                    <input type="text" 
                    className="user-ID"
                    placeholder="Digite seu CPF..."
                    value={userOrder.userCPF}
                    onChange={(e) => setUserOrder({...userOrder, userCPF: e.target.value})}
                    />
                </div>
                <Link to="/sucesso">
                    <button className="end-order">
                        Reservar assento(s)
                    </button>
                </Link>
            </div>
        </Pageframe>
    );
}