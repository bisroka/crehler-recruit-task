export const getPrice = (
  price: number | undefined,
  countryCode: string
): string => `${price} ${getCurrencySymbol(getCurrencyCode(countryCode))}`;

export const getCurrencyCode = (countryCode: string): string => {
  switch (countryCode) {
    case "DE":
      return "EUR";
    case "FR":
      return "EUR";
    case "ES":
      return "EUR";
    case "PL":
      return "PLN";
    case "US":
      return "USD";
    case "GB":
      return "GBP";
    default:
      return "";
  }
};

export const getCurrencySymbol = (currency: string): string => {
  switch (currency) {
    case "EUR":
      return "€";
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "PLN":
      return "zł";
    default:
      return "";
  }
};
