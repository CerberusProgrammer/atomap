import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1Ijoib21hcmdtdCIsImEiOiJjbHZ4eXE1Mm4ybjN5MmlteGtlcGxtaHh6In0.XQqB8x1C7Ot3QaBEacTn3w",
  },
});

export default searchApi;
