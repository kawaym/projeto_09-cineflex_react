import { useState } from "react";
import "./UniquePlace.css";

export default function UniquePlace({ status = 'disponivel', seatId, number, userOrder, setUserOrder}){
    const [selection, setSelection] = useState(status);
    function selectPlace(){
        if(selection === 'disponivel' && number !== ''){
            setUserOrder({...userOrder, seats: [...userOrder.seats, {
                seatNumber: number,
                seatId: seatId, 
            }]})
            setSelection('selecionado');
        }
        else if(selection === 'selecionado' && number !== ''){
            const seats = [...userOrder.seats];
            const seatsFiltered = seats.filter((seat) =>{
                return(
                    seat.seatNumber !== number
                )})
            setUserOrder({...userOrder, seats: [...seatsFiltered]})
            setSelection('disponivel');
        }
    }
    return(
        <button type="button" className={`place ${selection}`} onClick={selectPlace}>
            {number}
        </button>
    );
}