import React, {useEffect, useState} from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'
import FuramaFlatList from "../common/FuramaFlatList";
import FontSizes from "../../common/FontSizes";
import Dimens from "../../common/Dimens";
import FuramaText from "../common/FuramaText";
import Images from "../../common/Images";
import ServiceApis, {GET_NEWS_RESULTS_PER_PAGE} from "../../services/apis/ServiceApis";
import FuramaImage from "../common/FuramaImage";

const TypeNewsList = () => {
  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getNews(1)
  }, [])


  const getNews = (page) => {
    ServiceApis.getNews({
      page: page
    }, res => {
      if (page === 1) {
        setNews(res.data.objects)
        setRefreshing(false)
      } else {
        const newDate = news.concat(res.data.objects);
        setNews(Object.assign([], newDate))
      }
    }, err => {

    })
  }

  const loadMore = () => {
    const nextPage = news?.length / GET_NEWS_RESULTS_PER_PAGE + 1;
    getNews(nextPage)
  }

  const refresh = () => {
    setRefreshing(true)
    getNews(1)
  }

  return (
    <>
      <FuramaText
        style={styles.txtTitle}
        text={"Tin Tức"}
      />
      <FuramaFlatList
        refreshing={refreshing}
        horizontal={true}
        data={news}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onRefresh={refresh}
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            <View
              style={styles.container}
            >
              <FuramaImage
                style={styles.imageMarketing}
                uri={item.thumbnail}
                resizeMode={"cover"}
              />
              <FuramaText
                style={styles.txtMarketing}
                text={item.post_name}
              />
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  txtMarketing: {
    fontSize: FontSizes.size25,
    fontWeight: 'bold',
    color: 'white',

  },
  container: {
    marginBottom: Dimens.scale(50),
    marginHorizontal: Dimens.scale(10),
    width: Dimens.widthScreen / 1.5,
    height: Dimens.widthScreen / 2.5,
    borderRadius: Dimens.scale(15),

  },
  imageMarketing: {
    width: Dimens.widthScreen / 1.5,
    height: Dimens.widthScreen / 2.7,
    borderRadius: Dimens.scale(15),

  },
  txtTitle: {
    width: Dimens.widthScreen,
    height: Dimens.widthScreen / 10,
    borderRadius: Dimens.scale(10),
    fontWeight: 'bold',
    fontSize: FontSizes.size30,
    paddingLeft: Dimens.widthScreen / 16,
  },
})

export default TypeNewsList;
