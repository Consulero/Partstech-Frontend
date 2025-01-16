import SearchCatalog from "../components/SearchCatalog";
import SearchVehicle from "../components/SearchVehicle";
import { quoteState } from "../atoms/quoteSession";
import { useRecoilValue } from "recoil";

const Catalog = () => {
  const quoteData = useRecoilValue(quoteState);

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row">
        <SearchCatalog />
        <SearchVehicle />
      </div>
      <div className="w-full h-full bg-gray-200">
        {quoteData?.redirectUrl && (
          <iframe
            src={quoteData.redirectUrl}
            title="Redirect URL"
            style={{
              width: "125%",
              height: "125%",
              border: "none",
              transform: "scale(0.8)",
              transformOrigin: "0 0",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Catalog;
