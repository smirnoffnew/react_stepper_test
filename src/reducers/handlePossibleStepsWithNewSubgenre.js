const initial = [
    {number: 0, name: 'Genre'},
    {number: 1, name: 'Subgenre'},
    {number: 2, name: 'Add new subgenre'},
    {number: 3, name: 'Information'},
    {number: 4, name: 'Completion'},
];

export default (state = initial, action) => {
    switch (action.type) {
        default:
            return state;
    }
};