import { useQueryClient, useMutation } from "react-query";
import { suppliers } from "../services";

export const useDeleteSupplier = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((id) => suppliers.deleteSupplier(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("suppliers");
    },
  });

  const deleteSupplier = (id) => {
    deleteMutation.mutate(id);
  };

  return deleteSupplier;
};
