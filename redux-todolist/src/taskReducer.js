const initTask = {
    taskItem: []
}

export const taskReducer = (state = initTask, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                taskItem: [...state.taskItem, action.payload]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                taskItem: state.taskItem.filter((task) => task != action.payload)
            }
        case 'UPDATE_TASK':
            return {
                ...state,
                taskItem: state.taskItem.map((task) => {
                    if (task == action.payload.oldTask) {
                        task = action.payload.newTask
                    }
                    return task;
                })
            }
        default:
            return state;
    }
}