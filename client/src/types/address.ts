export interface AddressInterface {
  id: number;
  user_id: string;
  name: string;
  address: string;
  zipCode: string;
  state: string;
  country: string;
  is_default?: boolean;
}
