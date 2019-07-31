export const traceSteps = [
    { number: 0, name: 'Genre' },
    { number: 1, name: 'Subgenre' },
    { number: 2, name: 'Information' },
    { number: 3, name: 'Completion' },
];

export const traceStepsWithNewSubgenre = [
    { number: 0, name: 'Genre' },
    { number: 1, name: 'Subgenre' },
    { number: 2, name: 'Add new subgenre' },
    { number: 3, name: 'Information' },
    { number: 4, name: 'Completion' },
];

export const initialCurrentStep = {
    number: 0,
    name: 'Genre',
};

export const informationFields = [
    {
        name: "Book title",
        value: "",
        type: "text",
        fullWidth: true,
        key: "Book title",
    },
    {
        name: "Author",
        value: "",
        type: "select",
        fullWidth: true,
        key: "Author",
    },
    {
        name: "ISBN",
        value: "",
        type: "text",
        fullWidth: true,
        key: "ISBN",
    },
    {
        name: "Publisher",
        value: "",
        type: "select",
        fullWidth: true,
        key: "Publisher",
    },
    {
        name: "Date published",
        value: "",
        type: "date",
        fullWidth: false,
        key: "Date published",
    },
    {
        name: "Number of pages",
        value: "",
        type: "number",
        fullWidth: false,
        key: "Number of pages",
    },
    {
        name: "Format",
        value: "",
        type: "select",
        fullWidth: false,
        key: "Format",
    },
    {
        name: "Edition",
        value: "",
        type: "text",
        fullWidth: false,
        key: "Edition",
    },

    {
        name: "Edition language",
        value: "",
        type: "select",
        fullWidth: false,
        key: "Edition language",
    },
];