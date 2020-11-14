import FuramaService from "../FuramaService";

postFoodAndDrink.propTypes = {
  salesorder_items: PropTypes.array,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
}

function postFoodAndDrink(salesorder_items, onSuccess, onError) {
  const request = {
    url: '/api/v1/salesorder',
    data: {
      contact_id: '4960f140-f822-4842-b24e-af5010e3f87e',
      service_id: "f8c35c1e-6f8e-4e92-bf51-0f62c19a51f6",
      device_id: '11111',
      book_time: 1602857940418,
      note: '',
      sostatus: 'confirmed',
      discount_percent: 0,
      discount_amount: 0,
      salesorder_items,
      onSuccess,
      onError
    }
  }
  return FuramaService.POST(request)
}

export default {
  postFoodAndDrink
}
