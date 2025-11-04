import "./index.scss"

export default function BtCurso({ titulo, onClick }) {
    return (

        <button className={`botaos`} onClick={onClick}>{titulo}</button>


    );
}