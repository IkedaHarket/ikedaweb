export interface RenewTokenResponse {
    id:       string;
    email:    string;
    fullName: string;
    token:    string;
    isActive: boolean;
    roles:    string[];
}