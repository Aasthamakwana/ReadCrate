import {createContext, useContext} from "react";


const AppContext = createContext(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error('Appcontext must be within appContextProvider!')
    }
    return context;
}


const AppContextProvider = ({children}) => {


    return (
        {children}
    );
};

export default AppContextProvider;