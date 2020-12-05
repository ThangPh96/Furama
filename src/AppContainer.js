import Route from "./route/Route";
import FuramaLoading from "./components/common/FuramaLoading";
import FuramaView from "./components/common/FuramaView";
import {useSelector} from "react-redux";
import React, {useEffect} from "react";
import AppApis from "./services/apis/AppApis";
import store from "./redux/stores/Store";
import {setAuthData} from "./redux/actions/AuthActions";

function AppContainer() {
  const {loading} = useSelector(state => state.app);

  useEffect(() => {
    AppApis.getUserConfig((res) => {
      console.log('data=====', res.data)
      store.dispatch(setAuthData(res.data))
    }, err => {
      alert("loi cmnr")
    })
  }, [])

  return <FuramaView style={{flex: 1}}>
    <Route/>
    {loading && <FuramaLoading/>}
  </FuramaView>
}

export default AppContainer
