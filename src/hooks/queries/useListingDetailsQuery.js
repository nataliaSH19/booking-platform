import api from '@/api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const useListingDetailsQuery = (listingId) => {
  return (
    useQuery({
        queryKey: ['listing', listingId],
        queryFn: () => api.get(`/api/listings/${listingId}`)
      })
  )
}

export default useListingDetailsQuery
