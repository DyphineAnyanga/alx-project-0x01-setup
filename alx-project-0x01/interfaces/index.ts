// Interface for user data structure
export interface UserProps {
  id?: number; // Optional, since new users may not have an ID yet
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Interface for User Modal component props
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
