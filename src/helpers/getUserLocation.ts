import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Cannot connect to server because of error while connecting to server.",
        });
        reject();
      }
    );
  });
};
