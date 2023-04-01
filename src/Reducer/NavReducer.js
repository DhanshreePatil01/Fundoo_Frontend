const initialState={
    title :'Notes'
    }

    const navReducer=(state=initialState,action)=>{

        switch(action.type){
                case "notes":return{
                    title:"Notes"
                }
                case "archive":return{
                    title:"Archive"
                }
                case "trash":return{
                    title:"Trash"
                }
        
                default: return state
                }
            }   

 export default navReducer           