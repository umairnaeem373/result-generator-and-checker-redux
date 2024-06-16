import axios from "axios"

export const loadData=()=> async(dispatch)=>{
    try {
        dispatch({ type: 'REQUEST_DATA' });
        const {data}= await axios.get('https://json-api-wsnl.onrender.com/students')
        dispatch({type:'LOAD_DATA', payload:data}) 
    } catch (error) {
        console.log('Error:', error);
    }
}

export const addStudent=(data)=> async(dispatch)=>{
    try {
        const res= await axios.post('https://json-api-wsnl.onrender.com/students',data)
        dispatch({type:"ADD_RESULT" , payload:res.data })
        } catch (error) {
            dispatch({ type: 'ADDING_ERROR' , payload:error});
        }
}

export const getResult=(id)=> async (dispatch)=>{
    try {
    dispatch({ type: 'RESULT_REQUEST' });
    const res= await axios.get(`https://json-api-wsnl.onrender.com/students/${id}`)
    dispatch({type:"GET_RESULT" , payload:res.data })
    } catch (error) {
        dispatch({ type: 'RESULT_ERROR' });
    }
}

export const updateData=(id,data)=> async (dispatch)=>{
    console.log(id,data,'la casa de data');
    try {

    const res= await axios.put(`https://json-api-wsnl.onrender.com/students/${id}`,data)
    dispatch({type:"UPDATE_DATA" , payload:res.data })

    } catch (error) {
        console.log(error);
    }
}
