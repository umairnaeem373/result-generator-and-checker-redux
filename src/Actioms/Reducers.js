export const CreateData=(state={},action)=>{

    switch (action.type) {
        case 'REQUEST_DATA':
            return {...state,loading:true}

        case 'LOAD_DATA':
            return{...state,loading:false,students:action.payload}

        case "ADD_RESULT":
            return{...state,students:[...state.students,action.payload]}

        case "UPDATE_DATA":
          return {
            ...state,
            students: state.students.map((student) =>
              student.id === action.paylod.id ? action.payload : student
            ),
          };
            
        case "ADDING_ERROR":
            alert('Student may already exist with this Student ID')
            return{...state,error:[action.payload]}
    
        default:
            return state;
    }
}



export const Result=(state={},action)=>{

    switch(action.type){
        case 'RESULT_REQUEST':
            return { ...state, loading: true };

        case 'GET_RESULT':
            return {loading:false,result:[action.payload]}

        case 'RESULT_ERROR':
            return {loading:false,result:[]}
 
        default:
            return state;
    }

}