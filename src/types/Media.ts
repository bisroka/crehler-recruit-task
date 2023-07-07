import { Translation } from "./Translation";

export interface Media {
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
  mimeType: string;
  fileExtension: string;
  fileSize: number;
  title: string;
  metaData: {
    type: number;
    width: number;
    height: number;
  };
  uploadedAt: string;
  alt: string;
  url: string;
  fileName: string;
  translations: null;
  thumbnails: [
    {
      extensions: {
        foreignKeys: {
          apiAlias: string;
        };
      };
      _uniqueIdentifier: string;
      versionId: string;
      translated: [];
      createdAt: string;
      updatedAt: string;
      width: number;
      height: number;
      url: string;
      mediaId: string;
      id: string;
      customFields: null;
      apiAlias: string;
    },
    {
      extensions: {
        foreignKeys: {
          apiAlias: string;
        };
      };
      _uniqueIdentifier: string;
      versionId: string;
      translated: [];
      createdAt: string;
      updatedAt: string;
      width: number;
      height: number;
      url: string;
      mediaId: string;
      id: string;
      customFields: null;
      apiAlias: string;
    },
    {
      extensions: {
        foreignKeys: {
          apiAlias: string;
        };
      };
      _uniqueIdentifier: string;
      versionId: string;
      translated: [];
      createdAt: string;
      updatedAt: string;
      width: number;
      height: number;
      url: string;
      mediaId: string;
      id: string;
      customFields: null;
      apiAlias: string;
    }
  ];
  hasFile: boolean;
  private: boolean;
  id: string;
  customFields: null;
  apiAlias: string;
}
