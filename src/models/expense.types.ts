export interface IExpense {
    id: string;
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