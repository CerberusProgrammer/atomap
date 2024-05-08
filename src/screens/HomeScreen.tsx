import { BtnMyLocation } from "../components/BtnMyLocation";
import { MapView } from "../components/MapView";
import { ReactLogo } from "../components/ReactLogo";
import { SearchBar } from "../components/SearchBar";

export const HomeScreen = () => {
  return (
    <div>
      <div className="flex flex-row p-2 ml-1 mr-1">
        <SearchBar />
        <div className="w-full"></div>
        <BtnMyLocation />
      </div>
      <MapView />

      <ReactLogo />
    </div>
  );
};
