import { ToastPosition } from 'react-toastify';

export interface IExpense {
    id?: string;
    coinName: string;
    coinCount: number;
    buyCoinValue: number;
    sellCoinValue: number;
}

export interface ITextField {
    id: number;
    name: string;
    label: string;
    value: number | string;
    fullWidth: boolean;
    type: string;
    variant: "outlined" | "standard" | "filled" | undefined;
    icon: React.ReactNode | string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}


export interface IInformationToastify {
    position: ToastPosition | undefined;
    autoClose: number | false;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    progress: undefined;
}