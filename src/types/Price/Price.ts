import { Tax } from "./Tax";

export interface Price {
  value: {
    [key: string]: {
      default: {
        parent_id: string;
        variant_id: string;
        rule_id: null;
        is_ranged: string;
        price: {
          [key: string]: {
            net: number;
            gross: number;
            linked: boolean;
            currencyId: string;
          };
        };
        min_purchase: string;
        unit_id: null;

        purchase_unit: string;
        reference_unit: string;
        child_count: string;
      };
    };
  };
  default: null;
  apiAlias: string;
  calculatedTaxes: Tax[];
  listPrice: null;
  quantity: number;
  referencePrice: null;
  regulationPrice: null;
  taxRules: Tax[];
  totalPrice: number;
  unitPrice: number;
}
