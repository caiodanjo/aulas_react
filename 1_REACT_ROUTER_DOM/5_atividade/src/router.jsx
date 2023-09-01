import { Routes, Route } from "react-router-dom"

import Lorena from "./pages/Lorena"
import Suzana from "./pages/Suzana"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Lorena/>} />
            <Route path="/susu" element={<Suzana/>} />
        </Routes>
    )
}

export default Router