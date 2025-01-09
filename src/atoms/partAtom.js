import { atom } from "recoil";

export const partState = atom({
  key: "partState",
  default: [
    {
      id: 1,
      title: "Brembo Brake Pads 1",
      sku: "1232423",
      price: 790.09,
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      id: 2,
      title: "Brembo Brake Pads 2",
      sku: "1232423",
      price: 120.09,
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      id: 3,
      title: "Brembo Brake Pads 3",
      sku: "1232423",
      price: 57.09,
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      id: 4,
      title: "Brembo Brake Pads 4",
      sku: "1232423",
      price: 77.09,
      description: "Front - Premium NAO Ceramic OE",
    },
    {
      id: 5,
      title: "Brembo Brake Pads 5",
      sku: "1232423",
      price: 100.09,
      description: "Front - Premium NAO Ceramic OE",
    },
  ],
});
