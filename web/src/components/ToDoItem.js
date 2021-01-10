import React from 'react'
import {connect} from 'react-redux'

//#region Redux
const mapDispachToProps = (dispach) =>{
    return{
        editTodo: (id, value) => dispach({type: 'EDIT', id: id, value: value})
        ,deleteTodo: (id) => dispach({type: 'DELETE', id: id})
        ,setStatus: (id, value) => dispach({type: 'SET_STATUS', id: id, value: value})
        ,updateBucket: (id, value) => dispach({type: 'UPDATE_BUCKET', id: id, value: value})
        ,updateBucketList: (value) => dispach({type: 'UPDATE_BUCKET_LIST', value: value})
    }
  }
  const mapStateToProps = (state) =>{
    return{
        bucketList: state.bucketList
    }
  }
//#endregion


function ToDoList(props){
    const{ToDo, editTodo, setStatus, deleteTodo, updateBucket, bucketList, updateBucketList} = props;
    return(
        <div>
            <input type="text" value={ToDo.text} onChange={(e)=>editTodo(ToDo.id,e.target.value)} placeholder="Todo"/>
            <button onClick={(e)=>setStatus(ToDo.id,"DONE")}>Done</button>
            <button onClick={(e)=>setStatus(ToDo.id,"PENDING")}>Undo</button>
            <button onClick={(e)=>deleteTodo(ToDo.id)}>Delete</button>
            <input type="text" list="bucketList" placeholder="Bucket" value={ToDo.bucket} 
            onChange={(e)=>{updateBucket(ToDo.id,e.target.value)}} 
            onBlur={e => updateBucketList(e.target.value)}/>
            <datalist id="bucketList">
                {bucketList.map((item) =>
                        <option value={item} key={item}>{item}</option>
                )} 
            </datalist>
            <label>{ToDo.status}</label>
        </div>
    )
}

export default connect(mapStateToProps,mapDispachToProps) (ToDoList);