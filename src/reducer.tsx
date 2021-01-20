import { Reducer } from "redux";
import { IState } from "./store";

export interface IAction {
    type: string;
    payload?: any
}

const reducer: Reducer<IState, IAction> = (state: IState = {}, action: IAction): IState => {
    switch(action.type) {
        case 'doLogin':
            return {
                auth: action.payload
            }
        case 'logout':
            console.log('reduce logout');
            return {}
        default:
            return state;
    }
}

export default reducer;