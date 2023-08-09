import React from "react";

import Header    from "../components/header/Header";
import Info      from "../components/info/Info";
import Prognosis from "../components/prognos/Prognosis";
import Footer    from "../components/footer/Footer";

const App: React.FC = () => {
    
    return (
        <div className="container">
            <Header />
            <Info />
            <Prognosis />
            <Footer/>
        </div>
    );
}

export default App;
