import { IAction } from '@/reducer';
import {IState} from '@/store';

export default function(state: IState, action: IAction): IState {
    let stateBranch = state['Option1'];
    if (action.type === 'init-list') {
        stateBranch = {list: action.payload}
    }
    return {
        "Option1": stateBranch,
        ...state
    };
}