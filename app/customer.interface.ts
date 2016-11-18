export interface Customer {
    company: string;
    address: {
        street?: string; // required
        number?: string; // required
        postcode?: string;
        city?: string;
        country?: string;
    }
    email: string;
}