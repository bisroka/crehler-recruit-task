export interface Tax {
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
  translated: [];
  createdAt: string;
  updatedAt: string;
  taxRate: number;
  name: string;
  position: number;
  id: string;
  customFields: {};
  apiAlias: string;
}
