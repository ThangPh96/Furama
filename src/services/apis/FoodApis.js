import FuramaService from "../FuramaService";


const getFood = (onSuccess, onError) => {
    FuramaService.GET({
            url: 'api/v1/service/get/categories',
            params: {
                service_no: 'food_and_drink'
            },
            onSuccess,
            onError
        }
    )
}
export default {getFood}
