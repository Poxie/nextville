export type Config = {
    navbar: {
        about: string;
        investments: string;
        contact: string;
    };
    home: {
        title: string;
        subtitle: string;
    };
    about: {
        title: string;
        "paragraph-one": string;
        "paragraph-two": string;
    };
    values: {
        title: string;
        "value-one": string;
        "value-two": string;
        "value-three": string;
        "value-four": string;
        "value-five": string;
        "value-six": string;
    };
    people: {
        title: string;
        description: string;
        "person-one": {
            name: string;
            role: string;
            quote: string;
        };
        "person-two": {
            name: string;
            role: string;
            quote: string;
        };
        "person-three": {
            name: string;
            role: string;
            quote: string;
        };
    };
};