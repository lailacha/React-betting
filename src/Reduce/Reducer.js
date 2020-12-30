const INITIAL_STATE = {
    etat : 2
}

export default function EtatReducer(state = INITIAL_STATE, action) {

    switch(action.type){ 
 
        case 'INCR':
            return{
                ...state, 
                etat : state.etat +1
            }
        default: return state;
    }

}

