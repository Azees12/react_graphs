import create from 'zustand'
import axios from 'axios';

import { devtools, persist } from 'zustand/middleware';

const SalesStore = (set) => ({
    data:[],
    fetch: 
        async(url) => {
        try {
        const response = await axios.get(url)
        const results = response.data
        console.log(results.Data)
        set({ data: results.Data})
        }catch(e) {
            console.log(e)
        }
            
        
    }

})

const useSalesStore = create(SalesStore)


export default useSalesStore;