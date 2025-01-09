import Cart from "../components/Cart";
import ItemDetail from "../components/ItemDetail";
import SearchCatalog from "../components/SearchCatalog";
import SearchVehicle from "../components/SearchVehicle";
import { partState } from "../atoms/partAtom";
import { useRecoilValue } from "recoil";

const Catalog = () => {
  const partsData = useRecoilValue(partState);

  return (
    <div className="h-full flex flex-col">
      {/* Header Panel */}
      <div className="flex flex-row">
        <SearchCatalog />
        <SearchVehicle />
      </div>
      <div className="flex flex-row flex-grow mt-2 gap-2">
        {/* Scrollable Item List */}
        <div className="bg-gray-100 w-3/4 h-full">
          <div className="bg-white p-4 border rounded-lg shadow h-full">
            <div className="h-[480px] overflow-y-auto">
              {partsData?.map((item, index) => (
                <ItemDetail key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        {/* Cart Panel */}
        <div className="bg-gray-100 w-1/4 h-full overflow-y-auto">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
