import { useQuery } from "react-query";
import { products } from "../services";

export const useOneProduct = (props) => {
  const { data, isLoading } = useQuery(["product", props?.productId], () =>
    products.getOneProduct(props?.productId)
  );
  console.log("data: ", data);
  return { data, isLoading };
};
