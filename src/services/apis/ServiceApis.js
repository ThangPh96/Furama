import FuramaService from "../FuramaService";
import PropTypes from "prop-types";

const getSerivce = (onSuccess, onError) => {
  FuramaService.GET({
    url: '/api/v1/service',
    onSuccess,
    onError
  })
}

getNews.propTypes = {
  requestData: {
    page: PropTypes.number
  }
};

export const GET_NEWS_RESULTS_PER_PAGE = 10;

function getNews(requestData, onSuccess, onError) {
  FuramaService.GET({
    url: '/api/v1/post',
    params: {
      page: requestData.page,
      results_per_page: GET_NEWS_RESULTS_PER_PAGE
    },
    onSuccess,
    onError
  })
}

export default {
  getSerivce,
  getNews
}
