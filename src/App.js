import React from "react";
import CardList from "./CardList";
import Searchbox from "./SearchBox"
import { robots } from "./robots";

const App = () => {
    return(
        <div className="tc">
            <h1 className="f1 dark-green">RoboBuddies</h1>
            <Searchbox />
            <CardList robots={robots}/>
        </div>
    );
}

export default App;