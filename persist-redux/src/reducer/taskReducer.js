const initData = {
    taskList: ['Learn React', 'Learn Redux']
}
export const taskReducer = (state = initData, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                taskList:[...state.taskList,action.payload]
            }
        default:
            return state;
    }
}