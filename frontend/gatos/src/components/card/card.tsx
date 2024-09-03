import "./card.css";

interface CardProps {
    foto: string,
    lugar: string,
    nomeGato: string


}

export function Card({ foto, lugar, nomeGato }: CardProps) {
    return (
        <div className="card">
            <img src={foto} />
            <h2>{nomeGato}</h2>
            <p><b>{lugar}</b></p>
        </div>
    )
}