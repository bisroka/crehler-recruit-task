import axios from "axios";

interface GetProductsParametersBySearch {
  "no-aggregations": string;
  "only-aggregations": string;
  search: string;
}

export const getProductsBySearch = async (
  parameters: Partial<GetProductsParametersBySearch>
) => {
  const accessKey = process.env.VUE_APP_SW_ACCESS_KEY;
  const defaultParameters = {
    "no-aggregations": "true",
  };

  try {
    const response = await axios.post(
      `https://demo.crehler.dev/store-api/search-suggest`,
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
