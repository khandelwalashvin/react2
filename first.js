import React from "react";
import React from "react-dom/client";


const App=()=>{
    return <div className="app"><Header/><Body/></div>;
};

const root= ReactDom.createRoot(document.getElementById("root"));
root.Render(<App/>);