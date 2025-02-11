import SearchVehicle from "../components/SearchVehicle";
import { quoteState } from "../atoms/quoteSession";
import { useRecoilState, useRecoilValue } from "recoil";
import { reqQuotes } from "../api";
import { vehicleState } from "../atoms/vehicleInfo";
import { toast } from "react-toastify";
import _ from "lodash";

const Catalog = () => {
  const [quote, setQuote] = useRecoilState(quoteState);
  const vehicleInfo = useRecoilValue(vehicleState);

  const handleSearch = async () => {
    try {
      if (_.isEmpty(vehicleInfo)) {
        toast.error("Please select a vehicle");
        return;
      }
      const res = await reqQuotes(vehicleInfo);
      setQuote(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Error searching parts");
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row justify-center">
        <SearchVehicle />
        <div >
          <button
            onClick={handleSearch}
            className="mt-2 bg-gray-600 text-white text-xs px-3 py-1 rounded-lg shadow-sm hover:bg-gray-700 transition"
          >
            Continue with Partstech
          </button>
        </div>
      </div>
      <div className="w-full h-full bg-gray-200">
        {quote?.redirectUrl && (
          <iframe
            src={quote.redirectUrl}
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
