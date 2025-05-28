import api from '@/api'
import { useMutation } from '@tanstack/react-query'
import React from 'react'

const useSignOutMutation = () => {
    return useMutation({
        mutationFn:()=> api.post('/api/signin'),
      }
       
      )
}

export default useSignOutMutation
