import { atom } from "recoil";

export const partState = atom({
  key: "partState",
  default: [
    {
      partId: "BBHK-24CA1",
      price: 100,
      partNumber: "24CA",
      partName: "Bosch Windshield Wiper Blade 1",
      brand: {
        brandID: "BBHK",
        brandName: "Bosch",
        id: 551,
        displayName: "Bosch",
      },
      images: [
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/ZLOBMLAfyDDbgg3mYiYtZcFJmHJ4Vh9kUYgZHo1ujsc/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9mZS8wMy82Zi9mZTAzNmYzNjM1MTI0Y2I2ZDViMzVkNWEwNTkyNzllNjM0NGRlZTZlLkpQRw",
          full: "https://image.partstech.com/ZLOBMLAfyDDbgg3mYiYtZcFJmHJ4Vh9kUYgZHo1ujsc/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9mZS8wMy82Zi9mZTAzNmYzNjM1MTI0Y2I2ZDViMzVkNWEwNTkyNzllNjM0NGRlZTZlLkpQRw",
          medium:
            "https://image.partstech.com/ZLOBMLAfyDDbgg3mYiYtZcFJmHJ4Vh9kUYgZHo1ujsc/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9mZS8wMy82Zi9mZTAzNmYzNjM1MTI0Y2I2ZDViMzVkNWEwNTkyNzllNjM0NGRlZTZlLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/-AIp-K87sX3BNNpZv4UdJDZrq1nOIyDxURF1LIdVaVU/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy8wMy83Mi8yZS8wMzcyMmViYTRkNDA4YWU2YjlmYjdmYjgwNmJjMzA3NzFmMDI2ZTljLkpQRw",
          full: "https://image.partstech.com/-AIp-K87sX3BNNpZv4UdJDZrq1nOIyDxURF1LIdVaVU/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy8wMy83Mi8yZS8wMzcyMmViYTRkNDA4YWU2YjlmYjdmYjgwNmJjMzA3NzFmMDI2ZTljLkpQRw",
          medium:
            "https://image.partstech.com/-AIp-K87sX3BNNpZv4UdJDZrq1nOIyDxURF1LIdVaVU/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy8wMy83Mi8yZS8wMzcyMmViYTRkNDA4YWU2YjlmYjdmYjgwNmJjMzA3NzFmMDI2ZTljLkpQRw",
        },
      ],
      partsTechCatalogURL:
        "https://app.partstech.com/Bosch-Windshield-Wiper-Blade/details/BBHK-24CA?part_term=8852",
      taxonomy: {
        partTypeId: 8852,
        partTypeName: "Windshield Wiper Blade",
        categoryId: 22,
        categoryName: "Wiper and Washer",
        subCategoryId: 236,
        subCategoryName: "Windshield Wiper Arm, Blade, and Related Components",
      },
      partCategory: "Maintenance",
      vehicleId: 189326,
      vehicleName: "2009 BMW M3 Base 4.0L V8 DOHC S65B40A",
      attributes: [
        {
          name: "ItemQuantity",
          label: "Item Qty/Size/Weight",
          value: "1 Each",
          type: "Part",
        },
        {
          name: "Position",
          label: "Position",
          value: "Front Left",
          type: "Part",
          dbInfo: {
            dbName: "pcdb",
            tableName: "positions",
            idFieldName: "Position",
            idValue: "PositionID",
          },
        },
        {
          name: "Qty",
          label: "Quantity per vehicle",
          value: 1,
          type: "Both",
        },
      ],
      variations: [
        {
          variationId: "E1fHKgzpPvO",
          partName: "Bosch Clear Advantage",
          notes: {},
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Sedan",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "3fh7cCVNQOX",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Coupe",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "Iwf0SBSW8u4",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Convertible",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
      ],
      notes: [["Optional Ceramic", "Includes Hardware Installation Kit"]],
      originalPart: {
        typeOfOrigination: "Alternate",
        partId: "ABCD-12345",
        partNumber: "12345",
        brand: {
          brandID: "BBHK",
          brandName: "Bosch",
          id: 551,
          displayName: "Bosch",
        },
      },
      rewards: [
        {
          program: "extra Loyalty Program",
          points: 10,
          bonusPoints: 1,
        },
      ],
    },
    {
      partId: "BBHK-24CA2",
      price: 100,
      partNumber: "24CA",
      partName: "Autopart International ProTUNE Engine Oil Filter",
      brand: {
        brandID: "BBHK",
        brandName: "Bosch",
        id: 551,
        displayName: "Bosch",
      },
      images: [
        {
          preview:
            "https://image.partstech.com/ZLOBMLAfyDDbgg3mYiYtZcFJmHJ4Vh9kUYgZHo1ujsc/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9mZS8wMy82Zi9mZTAzNmYzNjM1MTI0Y2I2ZDViMzVkNWEwNTkyNzllNjM0NGRlZTZlLkpQRw",
          full: "https://image.partstech.com/ZLOBMLAfyDDbgg3mYiYtZcFJmHJ4Vh9kUYgZHo1ujsc/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9mZS8wMy82Zi9mZTAzNmYzNjM1MTI0Y2I2ZDViMzVkNWEwNTkyNzllNjM0NGRlZTZlLkpQRw",
          medium:
            "https://image.partstech.com/ZLOBMLAfyDDbgg3mYiYtZcFJmHJ4Vh9kUYgZHo1ujsc/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9mZS8wMy82Zi9mZTAzNmYzNjM1MTI0Y2I2ZDViMzVkNWEwNTkyNzllNjM0NGRlZTZlLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
      ],
      partsTechCatalogURL:
        "https://app.partstech.com/Bosch-Windshield-Wiper-Blade/details/BBHK-24CA?part_term=8852",
      taxonomy: {
        partTypeId: 8852,
        partTypeName: "Windshield Wiper Blade",
        categoryId: 22,
        categoryName: "Wiper and Washer",
        subCategoryId: 236,
        subCategoryName: "Windshield Wiper Arm, Blade, and Related Components",
      },
      partCategory: "Maintenance",
      vehicleId: 189326,
      vehicleName: "2009 BMW M3 Base 4.0L V8 DOHC S65B40A",
      attributes: [
        {
          name: "ItemQuantity",
          label: "Item Qty/Size/Weight",
          value: "1 Each",
          type: "Part",
        },
        {
          name: "Position",
          label: "Position",
          value: "Front Left",
          type: "Part",
          dbInfo: {
            dbName: "pcdb",
            tableName: "positions",
            idFieldName: "Position",
            idValue: "PositionID",
          },
        },
        {
          name: "Qty",
          label: "Quantity per vehicle",
          value: 1,
          type: "Both",
        },
      ],
      variations: [
        {
          variationId: "E1fHKgzpPvO",
          partName: "Bosch Clear Advantage",
          notes: {},
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Sedan",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "3fh7cCVNQOX",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Coupe",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "Iwf0SBSW8u4",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Convertible",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
      ],
      notes: [["Optional Ceramic", "Includes Hardware Installation Kit"]],
      originalPart: {
        typeOfOrigination: "Alternate",
        partId: "ABCD-12345",
        partNumber: "12345",
        brand: {
          brandID: "BBHK",
          brandName: "Bosch",
          id: 551,
          displayName: "Bosch",
        },
      },
      rewards: [
        {
          program: "extra Loyalty Program",
          points: 10,
          bonusPoints: 1,
        },
      ],
    },
    {
      partId: "BBHK-24CA3",
      price: 100,
      partNumber: "24CA",
      partName: "Motorcraft , Spin-On Engine Oil Filter",
      brand: {
        brandID: "BBHK",
        brandName: "Bosch",
        id: 551,
        displayName: "Bosch",
      },
      images: [
        {
          preview:
            "https://image.partstech.com/-AIp-K87sX3BNNpZv4UdJDZrq1nOIyDxURF1LIdVaVU/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy8wMy83Mi8yZS8wMzcyMmViYTRkNDA4YWU2YjlmYjdmYjgwNmJjMzA3NzFmMDI2ZTljLkpQRw",
          full: "https://image.partstech.com/-AIp-K87sX3BNNpZv4UdJDZrq1nOIyDxURF1LIdVaVU/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy8wMy83Mi8yZS8wMzcyMmViYTRkNDA4YWU2YjlmYjdmYjgwNmJjMzA3NzFmMDI2ZTljLkpQRw",
          medium:
            "https://image.partstech.com/-AIp-K87sX3BNNpZv4UdJDZrq1nOIyDxURF1LIdVaVU/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy8wMy83Mi8yZS8wMzcyMmViYTRkNDA4YWU2YjlmYjdmYjgwNmJjMzA3NzFmMDI2ZTljLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
      ],
      partsTechCatalogURL:
        "https://app.partstech.com/Bosch-Windshield-Wiper-Blade/details/BBHK-24CA?part_term=8852",
      taxonomy: {
        partTypeId: 8852,
        partTypeName: "Windshield Wiper Blade",
        categoryId: 22,
        categoryName: "Wiper and Washer",
        subCategoryId: 236,
        subCategoryName: "Windshield Wiper Arm, Blade, and Related Components",
      },
      partCategory: "Maintenance",
      vehicleId: 189326,
      vehicleName: "2009 BMW M3 Base 4.0L V8 DOHC S65B40A",
      attributes: [
        {
          name: "ItemQuantity",
          label: "Item Qty/Size/Weight",
          value: "1 Each",
          type: "Part",
        },
        {
          name: "Position",
          label: "Position",
          value: "Front Left",
          type: "Part",
          dbInfo: {
            dbName: "pcdb",
            tableName: "positions",
            idFieldName: "Position",
            idValue: "PositionID",
          },
        },
        {
          name: "Qty",
          label: "Quantity per vehicle",
          value: 1,
          type: "Both",
        },
      ],
      variations: [
        {
          variationId: "E1fHKgzpPvO",
          partName: "Bosch Clear Advantage",
          notes: {},
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Sedan",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "3fh7cCVNQOX",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Coupe",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "Iwf0SBSW8u4",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Convertible",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
      ],
      notes: [["Optional Ceramic", "Includes Hardware Installation Kit"]],
      originalPart: {
        typeOfOrigination: "Alternate",
        partId: "ABCD-12345",
        partNumber: "12345",
        brand: {
          brandID: "BBHK",
          brandName: "Bosch",
          id: 551,
          displayName: "Bosch",
        },
      },
      rewards: [
        {
          program: "extra Loyalty Program",
          points: 10,
          bonusPoints: 1,
        },
      ],
    },
    {
      partId: "BBHK-24CA4",
      price: 100,
      partNumber: "24CA",
      partName: "Bosch Windshield Wiper Blade 4",
      brand: {
        brandID: "BBHK",
        brandName: "Bosch",
        id: 551,
        displayName: "Bosch",
      },
      images: [
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
      ],
      partsTechCatalogURL:
        "https://app.partstech.com/Bosch-Windshield-Wiper-Blade/details/BBHK-24CA?part_term=8852",
      taxonomy: {
        partTypeId: 8852,
        partTypeName: "Windshield Wiper Blade",
        categoryId: 22,
        categoryName: "Wiper and Washer",
        subCategoryId: 236,
        subCategoryName: "Windshield Wiper Arm, Blade, and Related Components",
      },
      partCategory: "Maintenance",
      vehicleId: 189326,
      vehicleName: "2009 BMW M3 Base 4.0L V8 DOHC S65B40A",
      attributes: [
        {
          name: "ItemQuantity",
          label: "Item Qty/Size/Weight",
          value: "1 Each",
          type: "Part",
        },
        {
          name: "Position",
          label: "Position",
          value: "Front Left",
          type: "Part",
          dbInfo: {
            dbName: "pcdb",
            tableName: "positions",
            idFieldName: "Position",
            idValue: "PositionID",
          },
        },
        {
          name: "Qty",
          label: "Quantity per vehicle",
          value: 1,
          type: "Both",
        },
      ],
      variations: [
        {
          variationId: "E1fHKgzpPvO",
          partName: "Bosch Clear Advantage",
          notes: {},
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Sedan",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "3fh7cCVNQOX",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Coupe",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "Iwf0SBSW8u4",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Convertible",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
      ],
      notes: [["Optional Ceramic", "Includes Hardware Installation Kit"]],
      originalPart: {
        typeOfOrigination: "Alternate",
        partId: "ABCD-12345",
        partNumber: "12345",
        brand: {
          brandID: "BBHK",
          brandName: "Bosch",
          id: 551,
          displayName: "Bosch",
        },
      },
      rewards: [
        {
          program: "extra Loyalty Program",
          points: 10,
          bonusPoints: 1,
        },
      ],
    },
    {
      partId: "BBHK-24CA5",
      price: 100,
      partNumber: "24CA",
      partName: "Bosch Windshield Wiper Blade 5",
      brand: {
        brandID: "BBHK",
        brandName: "Bosch",
        id: 551,
        displayName: "Bosch",
      },
      images: [
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
      ],
      partsTechCatalogURL:
        "https://app.partstech.com/Bosch-Windshield-Wiper-Blade/details/BBHK-24CA?part_term=8852",
      taxonomy: {
        partTypeId: 8852,
        partTypeName: "Windshield Wiper Blade",
        categoryId: 22,
        categoryName: "Wiper and Washer",
        subCategoryId: 236,
        subCategoryName: "Windshield Wiper Arm, Blade, and Related Components",
      },
      partCategory: "Maintenance",
      vehicleId: 189326,
      vehicleName: "2009 BMW M3 Base 4.0L V8 DOHC S65B40A",
      attributes: [
        {
          name: "ItemQuantity",
          label: "Item Qty/Size/Weight",
          value: "1 Each",
          type: "Part",
        },
        {
          name: "Position",
          label: "Position",
          value: "Front Left",
          type: "Part",
          dbInfo: {
            dbName: "pcdb",
            tableName: "positions",
            idFieldName: "Position",
            idValue: "PositionID",
          },
        },
        {
          name: "Qty",
          label: "Quantity per vehicle",
          value: 1,
          type: "Both",
        },
      ],
      variations: [
        {
          variationId: "E1fHKgzpPvO",
          partName: "Bosch Clear Advantage",
          notes: {},
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Sedan",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "3fh7cCVNQOX",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Coupe",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "Iwf0SBSW8u4",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Convertible",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
      ],
      notes: [["Optional Ceramic", "Includes Hardware Installation Kit"]],
      originalPart: {
        typeOfOrigination: "Alternate",
        partId: "ABCD-12345",
        partNumber: "12345",
        brand: {
          brandID: "BBHK",
          brandName: "Bosch",
          id: 551,
          displayName: "Bosch",
        },
      },
      rewards: [
        {
          program: "extra Loyalty Program",
          points: 10,
          bonusPoints: 1,
        },
      ],
    },
    {
      partId: "BBHK-24CA6",
      price: 100,
      partNumber: "24CA",
      partName: "Bosch Windshield Wiper Blade 6",
      brand: {
        brandID: "BBHK",
        brandName: "Bosch",
        id: 551,
        displayName: "Bosch",
      },
      images: [
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
      ],
      partsTechCatalogURL:
        "https://app.partstech.com/Bosch-Windshield-Wiper-Blade/details/BBHK-24CA?part_term=8852",
      taxonomy: {
        partTypeId: 8852,
        partTypeName: "Windshield Wiper Blade",
        categoryId: 22,
        categoryName: "Wiper and Washer",
        subCategoryId: 236,
        subCategoryName: "Windshield Wiper Arm, Blade, and Related Components",
      },
      partCategory: "Maintenance",
      vehicleId: 189326,
      vehicleName: "2009 BMW M3 Base 4.0L V8 DOHC S65B40A",
      attributes: [
        {
          name: "ItemQuantity",
          label: "Item Qty/Size/Weight",
          value: "1 Each",
          type: "Part",
        },
        {
          name: "Position",
          label: "Position",
          value: "Front Left",
          type: "Part",
          dbInfo: {
            dbName: "pcdb",
            tableName: "positions",
            idFieldName: "Position",
            idValue: "PositionID",
          },
        },
        {
          name: "Qty",
          label: "Quantity per vehicle",
          value: 1,
          type: "Both",
        },
      ],
      variations: [
        {
          variationId: "E1fHKgzpPvO",
          partName: "Bosch Clear Advantage",
          notes: {},
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Sedan",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "3fh7cCVNQOX",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Coupe",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "Iwf0SBSW8u4",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Convertible",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
      ],
      notes: [["Optional Ceramic", "Includes Hardware Installation Kit"]],
      originalPart: {
        typeOfOrigination: "Alternate",
        partId: "ABCD-12345",
        partNumber: "12345",
        brand: {
          brandID: "BBHK",
          brandName: "Bosch",
          id: 551,
          displayName: "Bosch",
        },
      },
      rewards: [
        {
          program: "extra Loyalty Program",
          points: 10,
          bonusPoints: 1,
        },
      ],
    },
    {
      partId: "BBHK-24CA7",
      price: 100,
      partNumber: "24CA",
      partName: "Bosch Windshield Wiper Blade 7",
      brand: {
        brandID: "BBHK",
        brandName: "Bosch",
        id: 551,
        displayName: "Bosch",
      },
      images: [
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
        {
          preview:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          full: "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
          medium:
            "https://image.partstech.com/-8NO0x6apcmfE8q9rnfMW3xUzXlCkJyiqYm73Qlgh6A/rs:fit:400:400:0/g:sm/czM6Ly9wYXJ0c3RlY2gtaW1hZ2Utc2VydmVyL2ltYWdlcy9jYS8wNS8zMi9jYTA1MzJkOTNhMjNiZDE1NDE1YTg5YzQzZDZiNzU3YmY5OTA2ZmIxLkpQRw",
        },
      ],
      partsTechCatalogURL:
        "https://app.partstech.com/Bosch-Windshield-Wiper-Blade/details/BBHK-24CA?part_term=8852",
      taxonomy: {
        partTypeId: 8852,
        partTypeName: "Windshield Wiper Blade",
        categoryId: 22,
        categoryName: "Wiper and Washer",
        subCategoryId: 236,
        subCategoryName: "Windshield Wiper Arm, Blade, and Related Components",
      },
      partCategory: "Maintenance",
      vehicleId: 189326,
      vehicleName: "2009 BMW M3 Base 4.0L V8 DOHC S65B40A",
      attributes: [
        {
          name: "ItemQuantity",
          label: "Item Qty/Size/Weight",
          value: "1 Each",
          type: "Part",
        },
        {
          name: "Position",
          label: "Position",
          value: "Front Left",
          type: "Part",
          dbInfo: {
            dbName: "pcdb",
            tableName: "positions",
            idFieldName: "Position",
            idValue: "PositionID",
          },
        },
        {
          name: "Qty",
          label: "Quantity per vehicle",
          value: 1,
          type: "Both",
        },
      ],
      variations: [
        {
          variationId: "E1fHKgzpPvO",
          partName: "Bosch Clear Advantage",
          notes: {},
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Sedan",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "3fh7cCVNQOX",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Coupe",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
        {
          variationId: "Iwf0SBSW8u4",
          partName: "Bosch Clear Advantage",
          notes: [["Remove plastic guide from wiper arm"]],
          attributes: [
            {
              name: "Position",
              label: "Position",
              value: "Front Left",
              type: "Part",
              dbInfo: {
                dbName: "pcdb",
                tableName: "positions",
                idFieldName: "Position",
                idValue: "PositionID",
              },
            },
            {
              name: "Bodytype",
              label: "Body",
              value: "Convertible",
              type: "Both",
              dbInfo: {
                dbName: "vcdb",
                tableName: "bodytype",
                idFieldName: "BodyTypeName",
                idValue: "BodyTypeID",
              },
            },
            {
              name: "Qty",
              label: "Quantity per vehicle",
              value: 1,
              type: "Both",
            },
          ],
        },
      ],
      notes: [["Optional Ceramic", "Includes Hardware Installation Kit"]],
      originalPart: {
        typeOfOrigination: "Alternate",
        partId: "ABCD-12345",
        partNumber: "12345",
        brand: {
          brandID: "BBHK",
          brandName: "Bosch",
          id: 551,
          displayName: "Bosch",
        },
      },
      rewards: [
        {
          program: "extra Loyalty Program",
          points: 10,
          bonusPoints: 1,
        },
      ],
    },

    // {
    //   id: 1,
    //   title: "Brembo Brake Pads 1",
    //   sku: "1232423",
    //   price: 790.09,
    //   description: "Front - Premium NAO Ceramic OE",
    // },
    // {
    //   id: 2,
    //   title: "Brembo Brake Pads 2",
    //   sku: "1232423",
    //   price: 120.09,
    //   description: "Front - Premium NAO Ceramic OE",
    // },
    // {
    //   id: 3,
    //   title: "Brembo Brake Pads 3",
    //   sku: "1232423",
    //   price: 57.09,
    //   description: "Front - Premium NAO Ceramic OE",
    // },
    // {
    //   id: 4,
    //   title: "Brembo Brake Pads 4",
    //   sku: "1232423",
    //   price: 77.09,
    //   description: "Front - Premium NAO Ceramic OE",
    // },
    // {
    //   id: 5,
    //   title: "Brembo Brake Pads 5",
    //   sku: "1232423",
    //   price: 100.09,
    //   description: "Front - Premium NAO Ceramic OE",
    // },
  ],
});
