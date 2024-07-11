import { QueryOptionsType } from "@framework/types";
import { ProductDetails } from "./get-product";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchTopSellerProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await http.get(API_ENDPOINTS.TOP_SELLER_PRODUCTS);
	return data;
};
export const useTopSellerProductsQuery = (options: QueryOptionsType) => {
	return useQuery<ProductDetails[], Error>(
		[API_ENDPOINTS.TOP_SELLER_PRODUCTS, options],
		fetchTopSellerProducts
	);
};
