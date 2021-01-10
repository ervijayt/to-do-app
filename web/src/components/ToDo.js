import React from 'react'
import './ToDo.css'
import ToDoItem from './ToDoItem'
import {connect} from 'react-redux'
import {Post, IsOnline} from '../services/http'

//#region Redux
const mapDispachToProps = (dispach) =>{
    return{
        addTodo: () => dispach({type: 'ADD'}),
        setState: (value) => dispach({type: 'SET_STATE', value:value})
    }
  }
  const mapStateToProps = (state) =>{
    return{
        todo: state.todo
    }
  }
//#endregion

function ToDo(props){
    React.useEffect(()=>{
        if(IsOnline)
            (async() => { 
                let newState = await Post('todo/get');
                props.setState(newState.data[0]);
            })()
    },[]);
    return(
        <div className="todoBody">
            {/* <button onClick={Add}>Add Todo</button>
            {toDoList.map((item) => 
                <ToDoItem ToDo={item} key={item.id} Edit={Edit} SetStatus={SetStatus} 
                Delete={Delete} UpdateBucket={UpdateBucket} BucketList={bucketList} UpdateBucketList={UpdateBucketList}/>
            )} */}
            <button onClick={props.addTodo}>Add Todo</button>
            {props.todo.map((item) => 
                <ToDoItem ToDo={item} key={item.id}/>
            )}
        </div>        
    );
}

export default connect(mapStateToProps,mapDispachToProps) (ToDo);