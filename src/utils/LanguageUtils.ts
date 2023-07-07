export const getCountryCode = (language: string): string => {
  switch (language) {
    case "pl-PL":
      return "PL";
    case "en-US":
      return "US";
    case "en-GB":
      return "GB";
    case "de-DE":
      return "DE";
    case "fr-FR":
      return "FR";
    case "es-ES":
      return "ES";
    default:
      return "";
  }
};
