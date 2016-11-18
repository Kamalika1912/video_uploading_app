export interface Customer {
    name: string;
    address: {
        street?: string; // required
        number?: number; // required
        postcode?: string;
        city?: string;
        country?: string;
    }
    email: string;
}