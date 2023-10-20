import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { suppliers } from "../services";

export const useSupplierUpdate = () => {
  const [, setLocation] = useLocation();

  const { mutate: updateSupplier } = useMutation({
    mutationFn: suppliers.updateSupplier,
    onSuccess: (data) => {
      if (data.success) setLocation("/suppliers");
      console.info("> Product update completed");
    },
  });

  return updateSupplier;
};
