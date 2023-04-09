import { User } from "../../auth/interfaces";
import { Image } from './'

export interface Album {
    title:       string;
    id:          string;
    images:      Image[];
    description: string;
    created_at:  Date;
    user:        User;
}

