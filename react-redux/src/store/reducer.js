const defaultState ={
    inputValue:'1212',
    list:[1,2,3],
    test:666
}
export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
    }
    if(action.type==='add_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue.length>0 && newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState
    }
    if(action.type==='del_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type==='test-axios'){
        const newState=JSON.parse(JSON.stringify(state));
        console.log( action.value[0].w,898989);
        newState.test = action.value[0].w
        return newState
    }
    return state;
}