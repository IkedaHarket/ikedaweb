import { Contact, SocialNetwork, WebPage } from ".";

export interface Configuration {
    id:            string;
    contact:       Contact;
    socialNetwork: SocialNetwork[];
    webPage:       WebPage;
    carousel:      string[];
}





