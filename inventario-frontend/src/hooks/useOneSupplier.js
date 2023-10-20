import { useQuery } from "react-query";
import { suppliers } from "../services";

export const useOneSupplier = (props) => {
  const { data, isLoading } = useQuery(["supplier", props?.supplierId], () =>
    suppliers.getOneSupplier(props?.supplierId)
  );
  console.log("data: ", data);
  return { data, isLoading };
};
