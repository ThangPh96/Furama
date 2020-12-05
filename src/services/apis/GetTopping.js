import FuramaService from "../FuramaService";


const getTopping = (onSuccess, onError) => {
    FuramaService.GET({
            url: '/v1/service/get/capiategories',
            params: {
                service_no: 'food_and_drink'
            },
            onSuccess,
            onError
        }
    )
}
export default {getTopping}
