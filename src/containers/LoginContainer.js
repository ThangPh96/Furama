import React from 'react';
import FuramaContainer from "../components/common/FuramaContainer";
import TypeServiceList from "../components/home/TypeServiceList";
import TypeNewsList from "../components/home/TypeNewsList";
import Images from "../common/Images";
import FuramaText from "../components/common/FuramaText";
import FuramaTouchableOpacity from "../components/common/FuramaTouchableOpacity";
import {NAVIGATION_CONSTANTS} from "../common/Constants";
import FuramaImage from "../components/common/FuramaImage";

const LoginContainer = (props) => {
  const {
    navigation,
    route
  } = props;

  return (
    <FuramaContainer
      style={{}}
      renderContentView={() => {
        return (
          <>
            <FuramaTouchableOpacity
              style={{
                width: 300,
                height: 50,
                backgroundColor: 'blue'
              }}
              onPress={() => {
                // navigation.navigate(NAVIGATION_CONSTANTS.HOME)
                setIsLogin(true)
              }}
            />
            <FuramaText
              style={{
                color: 'white'
              }}
              text={'LOGIN'}
            />
            <FuramaImage
              style={{
                width: 200,
                height: 200
              }}
              localSource={route?.params?.image}
            />
          </>
        )
      }}
    />
  );
};


export default LoginContainer;
