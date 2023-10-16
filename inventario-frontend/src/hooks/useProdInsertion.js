import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { products } from "../services";

export const useProdInsertion = () => {
  //   const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const { mutate: insertProduct } = useMutation({
    mutationFn: products.addProduct,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("> Product insertion completed");
    },
  });

  return insertProduct;
};
