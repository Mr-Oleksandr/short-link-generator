import {useCallback} from 'react'

export const useMessageError = () => {
    return useCallback((text) => {
        if(window.M && text){
            window.M.toast({html:text})
        }
    },[])
}
