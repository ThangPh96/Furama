import React from 'react';
import FuramaView from "./components/common/FuramaView";
import FuramaText from "./components/common/FuramaText";
import ItemType from "./components/home/ItemType";
import Route from "./route/Route";


const App = () => {
    return (
        <FuramaView style={{flex:1}}>
            <Route/>
        </FuramaView>
    );
};


export default App;
