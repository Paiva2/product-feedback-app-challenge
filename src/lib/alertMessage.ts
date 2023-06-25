import Swal, { SweetAlertIcon } from "sweetalert2"

export function alertMessage(icon: SweetAlertIcon, message: string) {
  Swal.fire({
    position: "center",
    icon,
    title: message,
    showConfirmButton: false,
    timer: 1300,
  })
}
