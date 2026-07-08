import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success(
        "Account successfully created!, Please Verify the new account from the user's email address.",
      );
    },
    onError: (err) => {
      toast.error("There was an Error");
      console.log("ERROR", err);
    },
  });
  return { signup, isLoading };
}
