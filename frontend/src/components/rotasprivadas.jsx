import { Navigate } from "react-router";

export default function RotasPrivadas({ children }) {
  const logado = localStorage.getItem("admLogado") === "true"; 

  return logado ? children : <Navigate to="/loginadm" replace />;
}
