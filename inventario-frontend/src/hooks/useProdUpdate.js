import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { products } from "../services";

export const useProdUpdate = () => {
  const [, setLocation] = useLocation();

  const { mutate: updateProduct } = useMutation({
    mutationFn: products.editProduuct,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("> Product update completed");
    },
  });

  return updateProduct;
};
