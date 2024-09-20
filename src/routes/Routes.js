import { Route, Routes } from "react-router-dom";
import { FormSuscribe } from "../components/FormSuscribe";


export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<FormSuscribe/>} />
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
    );
  };