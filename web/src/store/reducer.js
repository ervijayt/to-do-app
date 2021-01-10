import {Post, IsOnline} from '../services/http'

function GetInitialTodo(id){
    let data = {};
    data.id = id ? id : 0;
    data.text = "";
    data.status = "PENDING";
    data.bucket = "";
    return data;
}
const initialState ={todo:[],bucketList:[],idCounter:0}

const Reducer = (state = initialState, action) =>{
    let newState ={};
    newState = {
        todo : [...state.todo],
        bucketList : [...state.bucketList],
        idCounter : state.idCounter
    }
    switch (action.type) {
        case 'ADD':
            newState.todo.push(GetInitialTodo(++newState.idCounter));
            break;
        case 'DELETE':
            newState.todo = newState.todo.filter(a=> a.id !== action.id);
            break;
        case 'EDIT':
            newState.todo.find(a => a.id === action.id).text = action.value
            break;
        case 'SET_STATUS':
            newState.todo.find(a => a.id === action.id).status = action.value
        break; 
        case 'UPDATE_BUCKET':
            newState.todo.find(a => a.id === action.id).bucket = action.value
        break;
        case 'UPDATE_BUCKET_LIST':
            let selectTedValue = newState.bucketList.find(a => a === action.value);
            if(!selectTedValue){
                newState.bucketList.push(action.value);
            }
        break;     
        default:
            break;
    }

    if(action.type === 'SET_STATE'){
        newState={
            todo : action.value.todo,
            bucketList : action.value.bucketList,
            idCounter : action.value.idCounter
        }
        console.log(newState);
    }
    else if(IsOnline && newState.todo.length)
        (async() => { await Post('todo/save', newState)})()

    return newState;
}

export default Reducer;