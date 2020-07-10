import { ExampleActionTypes } from '../actions';

const initialState = {
    example: "",
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ExampleActionTypes.EXAMPLE_ACTION_TYPE1: {
            return {
                ...initialState,
                example: action.payload.example,
            }
        }

        case ExampleActionTypes.EXAMPLE_ACTION_TYPE2: {
            return {
                ...initialState,
                example: action.payload.example,
            }
        }

        default:
            return state;
    }
}

export default exampleReducer;