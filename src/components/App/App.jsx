import "./reset.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSelection from "../MovieSelection/MovieSelection";
import PlaceSelection from "../PlaceSelection/PlaceSelection";
import DateSelection from "../DateSelection/DateSelection";

export default function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MovieSelection/>}></Route>
                    <Route path="/sessoes/:idFilme" element={<DateSelection/>}></Route>
                    <Route path="/assentos/:idSessao" element={<PlaceSelection/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}