import Route from "./route/Route";
import FuramaLoading from "./components/common/FuramaLoading";
import FuramaView from "./components/common/FuramaView";
import {useSelector} from "react-redux";
import React from "react";

function AppContainer() {
  const {loading} = useSelector(state => state.app);

  return <FuramaView style={{flex: 1}}>
    <Route/>
    {/*{loading && <FuramaLoading/>}*/}
  </FuramaView>
}

export default AppContainer
