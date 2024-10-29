import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const confirmOrder = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#93e",
    cancelButtonColor: "#d33c",
    confirmButtonText: "Yes, pay now!",
    cancelButtonText: "Keep buying",
  });
  return result;
};

export const confirmLogout = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You'll need to log in again!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#93e",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
    cancelButtonText: "Cancel",
  });
  return result;
};
