import "./reset.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSelection from "../MovieSelection/MovieSelection";
import PlaceSelection from "../PlaceSelection/PlaceSelection";
import DateSelection from "../DateSelection/DateSelection";
import SuccessPage from "../SuccessPage/SuccessPage";
import { useState } from "react";

export default function App(){
    const [userOrder, setUserOrder] = useState({
        movieTitle: '',
        movieDate: '',
        movieHour: '',
        userName: '',
        userCPF:  '',
        seats: [
            {
                seatNumber: '',
                seatId: '',
            }
        ]
    });
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MovieSelection userOrder={userOrder} setUserOrder={setUserOrder}/>}></Route>
                    <Route path="/sessoes/:idFilme" element={<DateSelection userOrder={userOrder} setUserOrder={setUserOrder}/>}></Route>
                    <Route path="/assentos/:idSessao" element={<PlaceSelection userOrder={userOrder} setUserOrder={setUserOrder}/>}></Route>
                    <Route path="/sucesso" element={<SuccessPage userOrder={userOrder} setUserOrder={setUserOrder}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}