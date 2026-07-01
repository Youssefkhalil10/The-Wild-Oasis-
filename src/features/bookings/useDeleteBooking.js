import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteCheckOut, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteCheckOut, isDeleting };
}
