import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Geolocation isn't supported by this browser.",
        });
        throw new Error("Geolocation is not supported by this browser.");

        reject();
      }
    );
  });
};
