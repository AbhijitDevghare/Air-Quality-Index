import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

function CustomRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default CustomRoutes