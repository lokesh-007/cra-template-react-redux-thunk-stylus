import keymirror from 'keymirror';
import { axiosWrapper } from '../../../utils';

export const ExampleActionTypes = keymirror({
    EXAMPLE_ACTION_TYPE1: null,
    EXAMPLE_ACTION_TYPE2: null,
});

export const ExampleActions = {
    exampleActionWithThunk() {
        return function(dispatch) {
            return new Promise((resolve, reject) => {
                dispatch(ExampleActions.exampleAction1({example: "loading"}));

                const urlToHit = `/api/v1/employees`;

                axiosWrapper.get(urlToHit).then(function(){
                    dispatch(ExampleActions.exampleAction2({example: "success"}));
                    resolve();
                }).catch(function(error){
                    dispatch(ExampleActions.exampleAction1({example: "error"}));
                    reject(error);
                });
            });
        }
    },

    exampleAction1(payload) {
        return {
            type: ExampleActionTypes.EXAMPLE_ACTION_TYPE1,
            payload,
        };
    },

    exampleAction2(payload) {
        return {
            type: ExampleActionTypes.EXAMPLE_ACTION_TYPE2,
            payload,
        }
    },
}
