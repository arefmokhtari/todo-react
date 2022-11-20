
import { createContext } from 'react';


const Load = createContext({
    loading: true,
    setLoading: () => {},
    toast: () => {},
})


export default Load;