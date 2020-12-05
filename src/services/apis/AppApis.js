import FuramaService from "../FuramaService";

const getUserConfig = (onSuccess, onError) => {
  FuramaService.GET({
      url: '/api/v1/contact/get/config',
      params: {
        device_id: '11111'
      },
      onSuccess,
      onError
    }
  )
}
export default {getUserConfig}
