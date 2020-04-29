interface Location {
    pathname: string;
    search: string;
    query: {
        [key: string]: string;
    };
}

interface History {
    push: (path: string) => void;
    replace: (path: string) => void;
    go: (num?: number) => void;
    back: (num?: number) => void;
}

interface Loading {
    global: boolean;
    models: {
        [key: string]: boolean;
    };
    effects: {
        [key: string]: boolean;
    };
}

export interface ConnectType {
    history: History;
    location: Location;
    loading: Loading;
}
