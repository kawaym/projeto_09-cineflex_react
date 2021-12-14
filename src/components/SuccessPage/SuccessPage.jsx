import './SuccessPage.css'

export default function SuccessPage(){
    return(
        <div className="container-success">
            <div className="container-info">
                <div className="titulo-info">
                    Filme e sessão
                </div>
                <div className="info">
                    <div className="titulo-filme">Enola Holmes</div>
                    <div className="data-filme">14/06/2021 15:00</div>
                </div>
            </div>
            <div className="container-info">
                <div className="titulo-info">
                    Ingressos
                </div>
                <div className="info">
                    <div className="assento-individual">Assento 15</div>
                    <div className="assento-individual">Assento 15</div>
                    <div className="assento-individual">Assento 15</div>
                    <div className="assento-individual">Assento 15</div>
                    <div className="assento-individual">Assento 15</div>
                </div>
            </div>
            <div className="container-info">
                <div className="titulo-info">
                    Comprador
                </div>
                <div className="info">
                    Nome: João da Silva Sauro
                    CPF: 123.456.789-10
                </div>
            </div>
            <button className="back-homepage">
                Voltar para Home
            </button>
        </div>
    );
}