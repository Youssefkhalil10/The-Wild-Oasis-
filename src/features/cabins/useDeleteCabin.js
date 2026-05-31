import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";
export function useDeleteCabin() {
  //useQueryClient => to can refetch data by their queryKey, to can refresh th UI
  //there is other types of useQueryClient
  const queryClient = useQueryClient();

  //useMutation => to can handle and edit on data using react Query
  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin successfuly deleted ");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}
