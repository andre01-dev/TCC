import "./index.scss"

export default function BtCurso({ titulo, onClick }) {
    return (

        <button className={`botao`} onClick={onClick}>{titulo}</button>

    );
}