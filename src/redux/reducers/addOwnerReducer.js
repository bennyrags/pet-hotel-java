const owners = [
    {
        name: 'Bob'
    },
    {
        name: 'Jim'
    },
]

const addOwner = (state = owners, action) => {
    switch(action.type) {
        case 'ADD_OWNER':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default addOwner;