import React from 'react';
import FuramaView from "./components/common/FuramaView";
import FuramaText from "./components/common/FuramaText";
import TypeServiceList from "./components/home/TypeServiceList";
import Route from "./route/Route";


const App = () => {
    return (
        <FuramaView style={{flex:1}}>
            <Route/>
        </FuramaView>
    );
};

export default App;
