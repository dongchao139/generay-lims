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
                auth: {}
            }
        default:
            return state;
    }
}

export default reducer;