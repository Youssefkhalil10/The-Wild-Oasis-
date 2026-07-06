import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: Logout, isLoading } = useMutation({
    mutationFn: LogOut,
    onSuccess: () => {
      toast.success("User loged out successfully");

      //to remove all the data from the cashe. very important step
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error("There was an Error with Log out, Try again");
      console.log("ERROR", err);
    },
  });
  return { Logout, isLoading };
}
