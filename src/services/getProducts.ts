import axios from "axios";

interface GetProductsParameters {
  "no-aggregations": string;
  "only-aggregations": string;
  page: number;
  limit: number;
  filter: Array<{
    type: string;
    field: string;
    value: string;
  }>;
  sort: Array<{
    field: string;
    order: string;
    naturalSorting: boolean;
  }>;
  "post-filter": Array<{
    type: string;
    field: string;
    value: string;
  }>;
  associations: object;
  aggregations: Array<{
    name: string;
    field: string;
    type: string;
  }>;
  grouping: Array<string>;
  fields: Array<string>;
  "total-count-mode": number;
  order: string;
  p: number;
  manufacturer: string;
  "min-price": number;
  "max-price": number;
  rating: number;
  "shipping-free": boolean;
  properties: string;
  "manufacturer-filter": boolean;
  "price-filter": boolean;
  "rating-filter": boolean;
  "shipping-free-filter": boolean;
  "properties-filter": boolean;
  "property-whitelist": string;
  "reduce-aggregations": boolean;
}

export const getProducts = async (
  categoryId: string,
  parameters: Partial<GetProductsParameters>
) => {
  const accessKey = process.env.VUE_APP_SW_ACCESS_KEY;
  const defaultParameters = {
    "no-aggregations": "true",
  };

  try {
    const response = await axios.post(
      `https://demo.crehler.dev/store-api/product-listing/${categoryId}`,
      {
        ...defaultParameters,
        ...parameters,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "sw-access-key": accessKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error getting products: ", error);
  }
};
