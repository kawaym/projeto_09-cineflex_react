import axios from 'axios';
import { Redirect, useNavigate } from 'react-router';
import Pageframe from '../Pageframe/Pageframe';
import './SuccessPage.css'

export default function SuccessPage({ userOrder, setUserOrder }){
    const navigate = useNavigate();
    function sendRequest(){
        const ids = userOrder.seats.map((seat) => {
            if(seat.seatId !== ''){
                return (seat.seatId)
            }})
        const idsFiltered = ids.filter((id) => id !== undefined)
        const request = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many',
        {
            ids: [...idsFiltered],
            name: userOrder.userName,
            cpf: userOrder.userCPF,
        })
        request.then(() => {
            alert("Reservas efetuadas com sucesso");
        });
        request.catch(() => {
            alert("Tente novamente mais tarde")
        });
    }
    return(
        <Pageframe pageFooter='' pageTitle='successPage'>
            <div className="container-success">
                <div className="container-info">
                    <div className="titulo-info">
                        Filme e sessão
                    </div>
                    <div className="info">
                        <div className="titulo-filme">{userOrder.movieTitle}</div>
                        <div className="data-filme">{userOrder.movieDate} {userOrder.movieHour}</div>
                    </div>
                </div>
                <div className="container-info">
                    <div className="titulo-info">
                        Ingressos
                    </div>
                    <div className="info">
                        {userOrder.seats.map((seat) => {
                            if (seat.seatNumber !== ''){
                                return(
                                    <div className="assento-individual" key={seat.seatId}>Assento {seat.seatNumber}</div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="container-info">
                    <div className="titulo-info">
                        Comprador
                    </div>
                    <div className="info">
                        Nome: {userOrder.userName}
                        CPF: {userOrder.userCPF}
                    </div>
                </div>
                <button className="back-homepage" onClick={() => {
                    sendRequest();
                    navigate("/");}
                    }>
                    Voltar para Home
                </button>
            </div>
        </Pageframe>
    );
}