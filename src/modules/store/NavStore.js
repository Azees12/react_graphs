import create from 'zustand'

import { devtools, persist } from 'zustand/middleware';

const navStore = (set) => ({
    
    open:false,
    setOpen: () => set(() => ({
        open:true,     
    })),
    setClose: () => set(() => ({
        open:false,     
    })),
        
})

const useNavStore = create(navStore)


export default useNavStore;