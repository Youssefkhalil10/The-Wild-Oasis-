import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateUser as UpdateUserAPi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdateUser } = useMutation({
    mutationFn: UpdateUserAPi,
    onSuccess: () => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error("There was an Error, Try again!");
      console.log("ERROR", err);
    },
  });
  return { updateUser, isUpdateUser };
}
