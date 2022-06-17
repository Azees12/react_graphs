import create from 'zustand'
import axios from 'axios';

import { devtools, persist } from 'zustand/middleware';

const SalesStore = (set) => ({
    data:[],
    isLoading:false,
    fetch: 
        async(url) => {
        try {
        const response = await axios.get(url)
        const results = response.data
        console.log(results.Data)
        set({ data: results.Data,})
        }catch(e) {
            console.log(e)
        }
            
        
    },
    setisLoading: () => {
        set({isLoading:true})
    }

})

const useSalesStore = create(SalesStore)


export default useSalesStore;