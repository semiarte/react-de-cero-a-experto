export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Action.typr = ABC no está implementada');
    
        default:
            return initialState;
    }
}