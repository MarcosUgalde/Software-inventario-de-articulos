import { useQuery } from "react-query";
import { products } from "../services";

export const useOneProduct = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: products.getOneProduct,
  });
  return { data, isLoading };
};
