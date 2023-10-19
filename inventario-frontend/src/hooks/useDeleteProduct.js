import { useQueryClient, useMutation } from "react-query";
import { products } from "../services";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((id) => products.deleteProduct(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const deleteProduct = (id) => {
    deleteMutation.mutate(id);
  };

  return deleteProduct;
};
