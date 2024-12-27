import Cart from "../components/Cart";
import SearchCatalog from "../components/SearchCatalog";
import SearchVehicle from "../components/SearchVehicle";

const Catalog = () => {
  const itemsData = [
    {
      title: "Brembo Brake Pads",
      sku: "1232423",
      price: "$77.09",
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      title: "Brembo Brake Pads",
      sku: "1232423",
      price: "$77.09",
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      title: "Brembo Brake Pads",
      sku: "1232423",
      price: "$77.09",
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      title: "Brembo Brake Pads",
      sku: "1232423",
      price: "$77.09",
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      title: "Brembo Brake Pads",
      sku: "1232423",
      price: "$77.09",
      description: "Front - Premium NAO Ceramic OE",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row">
        <SearchCatalog />
        <SearchVehicle />
      </div>
      <div className="flex flex-row flex-grow mt-2 gap-2">
        {/* Left Panel */}
        <div className="bg-gray-100 w-3/4 h-full">
          <div className="bg-white p-4 border rounded-lg shadow h-full">
            {/* Scrollable Item List */}
            <div className="h-full overflow-y-auto">
              {itemsData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4 p-4 border-b last:border-none"
                >
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-700">{item.price}</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="bg-gray-100 w-1/4 h-full overflow-y-auto">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
