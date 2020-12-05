import React, {useState, useEffect} from 'react'
import {StyleSheet} from 'react-native'
import FuramaContainer from "../components/common/FuramaContainer";
import {HEADER_MODE, NAVIGATION_CONSTANTS} from "../common/Constants";
import Images from "../common/Images";
import FuramaFlatList from "../components/common/FuramaFlatList";
import FuramaView from "../components/common/FuramaView";
import FuramaImage from "../components/common/FuramaImage";
import FuramaText from "../components/common/FuramaText";
import Dimens from "../common/Dimens";
import ButtonAmount from "../components/topping/ButtonAmount";
import FontSizes from "../common/FontSizes";
import FuramaTouchableOpacity from "../components/common/FuramaTouchableOpacity";
import Colors from "../common/Colors";
import {useSelector} from "react-redux";


function CartContainer(props) {
  const {navigation} = props;
  const {cartData} = useSelector(state => state.food)
  const [result, setResult] = useState(0)
  useEffect(() => {
  }, [])
  const onPressPlus = () => {
    setResult(result + 1)
  }
  const onPressSubtract = () => {
    if (result !== 0)
      setResult(result - 1)
  }
  const renderItem = ({item}) => {
    return (
      <FuramaView flexDirection={'row'} style={styles.container}>
        <FuramaImage
          style={styles.image}
          localSource={item.image}
        />
        <FuramaView style={{flex: 1, marginHorizontal: Dimens.scale(10), justifyContent: 'space-between'}}>
          <FuramaText
            style={{fontSize: FontSizes.size35}}
            text={item.item_name}
          />
          <FuramaText
            style={{fontSize: FontSizes.size28}}
            text={item.topping}/>

          <FuramaView flexDirection={'row'}
                      style={{
                        marginVertical: Dimens.scale(10),
                        alignItems: 'center', justifyContent: 'space-between'
                      }}>
            <FuramaView flexDirection={'row'}>
              <ButtonAmount
                text={'+'}
                style={styles.btnAmount}
                onPress={onPressPlus}
              />
              <FuramaText
                style={{fontSize: FontSizes.size35, marginHorizontal: Dimens.scale(5)}}
                text={result}/>
              <ButtonAmount
                text={'-'}
                style={styles.btnAmount}
                onPress={onPressSubtract}
              />
            </FuramaView>
            <FuramaText
              style={{fontSize: FontSizes.size28}}
              text={item.price_list?.list_price + ' đ'}/>
          </FuramaView>
          <FuramaText
            style={{fontSize: FontSizes.size28}}
            text={item.note}/>
          <FuramaView
            style={{borderBottomWidth: Dimens.scale(1 / 3)}}
          />
        </FuramaView>
      </FuramaView>
    )

  }
  return (
    <FuramaContainer
      headerData={{
        navigation: navigation,
        headerMode: HEADER_MODE.BACK,
        hasHeader: true,
        // title: 'Đồ ăn & thức uống',
      }}
      title={'Món đã chọn'}
      renderContentView={() => {
        return (
          <FuramaView
            style={{
              flex: 1
            }}
          >
            <FuramaFlatList
              style={{
                height: Dimens.heightScreen - Dimens.verticalScale(160)
              }}
              data={cartData}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
            <FuramaTouchableOpacity style={[styles.btnFinish, {
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: Dimens.widthScreen - Dimens.scale(40),
              marginLeft: Dimens.scale(20)
            }]}>
              <FuramaText
                style={{color: "#056055"}}
                text={'Gửi yêu cầu gọi món'}/>
              <FuramaText
                style={{color: "#056055"}}
                text={'Moneyyyyyyyyyyyyy'}
              />
            </FuramaTouchableOpacity>
          </FuramaView>
        )
      }}
    />


  )
}

const styles = StyleSheet.create({
  btnFinish: {
    bottom: Dimens.scale(30),
    flexDirection: 'row',
    padding: Dimens.scale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimens.widthScreen - Dimens.scale(60),
    backgroundColor: '#CDDFDD',
    height: Dimens.scale(40),
    borderRadius: Dimens.scale(10)
  },
  btnAmount: {
    height: Dimens.scale(23),
    width: Dimens.scale(23),
    borderRadius: Dimens.scale(5)
  },
  container: {
    marginHorizontal: Dimens.scale(5),
    marginVertical: Dimens.scale(10)
  },
  image: {
    height: Dimens.scale(80),
    width: Dimens.scale(80),
    borderRadius: Dimens.scale(6)
  },
  name: {},
  note: {}
})
export default CartContainer
