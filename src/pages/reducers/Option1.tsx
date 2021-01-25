import { IAction } from '@/reducer';
import {IState} from '@/store';

export default function(state: IState, action: IAction): IState {
    console.log('Option1');
    console.log(action);
    return state;
}