import React from 'react';

import {connect} from 'react-redux'
import axios from 'axios'
const TodoList = (props)=>{
    const {inputValue,list,test,handleDelItem,handleInputChange,handleClick,axiosTest} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleInputChange}></input>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
               {
                  list.map((val,index)=>{
                      return <li onClick={()=>handleDelItem(index)} key={index}>{val}</li>
                  })
               }
            </ul>
            <button onClick={axiosTest}>测试axios</button>
            <input onChange={()=>{}} value={test}></input>
            <input></input>
        </div>
    )
}

TodoList.defaultProps = {    
    test: '我是props的默认值！'
};
// class TodoList extends Component {
//     render(){
//         const {inputValue,list,handleDelItem,handleInputChange,handleClick} = this.props;

//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={handleInputChange}></input>
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                    {
//                       list.map((val,index)=>{
//                           return <li onClick={()=>handleDelItem(index)} key={index}>{val}</li>
//                       })
//                    }
//                 </ul>
//             </div>
//         )
//     }
// }
// store里面的state变成组件的props
const mapStateToProps =(state)=>{
    return {
      inputValue:state.inputValue,
      list:state.list,
      test:state.test
    }
}
// dispatch挂载在props
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputChange(e){
             const action = {
                 type:'change_input_value',
                 value:e.target.value
             }
             dispatch(action)
        },
        handleClick(){
            const action = {
                type:'add_item'
            }
            dispatch(action) 
        },
        handleDelItem(index){
            const action = {
                type:'del_item',
                index
            }
            console.log(index,'index')
            dispatch(action) 
        },
        axiosTest(){
            axios.get('./test.json').then(function (response) {
                console.log(response);
                let action ={
                    type:'test-axios',
                    value:response.data
                }

                 dispatch(action)
              })
              .catch(function (error) {
                console.log(error);
                
              });
        }
    }
}
// Todolist和store做连接
// 导出的是容器组件
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)