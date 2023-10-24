export type Contact = {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
};

export type ContactResponse = {
  results?: Contact[];
};

export interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

export type AddContactArgs = {
  TableData: {
    address: string;
    birthday_date: string;
    email: string;
    name: string;
    phone_number: string;
  };
};
