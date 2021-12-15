import { useEffect, useState } from "react";
import axios from "axios";
import "./reset.css";
import "./App.css";
import Pageframe from "../Pageframe/Pageframe";

export default function App(){
    const [posterFilmes, setPosterFilmes] = useState([]);
    useEffect(() =>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promise.then((resposta) => setPosterFilmes(resposta.data));
    }, []);
    

    return (
        <>
            <Pageframe></Pageframe>
        </>
    );
}