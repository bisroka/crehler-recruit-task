import { Translation } from "./Translation";

export interface Manufacturer {
  extensions: {
    foreignKeys: {
      apiAlias: string;
    };
    internal_mapping_storage: {
      apiAlias: string;
    };
  };
  _uniqueIdentifier: string;
  versionId: string;
  translated: Partial<Translation>;
  createdAt: string;
  updatedAt: string;
  mediaId: string;
  name: string;
  link: string;
  description: string;
  media: string;
  translations: string;
  id: string;
  customFields: {};
  apiAlias: string;
}
