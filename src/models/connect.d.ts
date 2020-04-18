interface historyType {
    go: (backNum: number) => void;
    push: (index: string) => void;
    location: {
        pathname: string;
    };
}

export interface ConnectType {
    historyType: historyType;
}
