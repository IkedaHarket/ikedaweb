export interface LoginResponse {
    id:       string;
    email:    string;
    fullName: string;
    token:    string;
    isActive: boolean;
    roles:    string[];
}