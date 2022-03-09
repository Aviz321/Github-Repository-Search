export interface Item {
  name: string;
  owner: OwnerModel;
}

export interface OwnerModel {
  url: string;
  avatar_url: string;
}