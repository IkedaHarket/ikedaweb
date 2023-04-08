
export interface AlertMessage{
    title?: string | HTMLElement | JQuery;
    text?: string;
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
    toast?: boolean;
    confirmButtonColor?: string
}