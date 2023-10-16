import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { suppliers } from "../services";

export const useSupInsertion = () => {
  //   const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const { mutate: register } = useMutation({
    mutationFn: suppliers.addSupplier,
    onSuccess: (data) => {
      if (data.success) setLocation("/suppliers");
      console.info("Successfully added a new supplier");
    },
  });
  return register;
};
