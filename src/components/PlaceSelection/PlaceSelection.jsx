import "./PlaceSelection.css";
import UniquePlace from "./UniquePlace/UniquePlace";

export default function PlaceSelection(){
    const assentos =
    [
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '50'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
        {
            status: 'disponivel',
            number: '1'
        },
    ]
    return(
        <div className="container-places">
            <div className="place-selection">
                {assentos.map((place) => <UniquePlace status={place.status} number={place.number}/>)}
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
                />
                <label>CPF do comprador:</label>
                <input type="text" 
                className="user-ID"
                placeholder="Digite seu CPF..."
                />
            </div>
            <button className="end-order">
                Reservar assento(s)
            </button>
        </div>
    );
}