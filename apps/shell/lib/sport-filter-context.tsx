'use client'

import { createContext, useContext, useState } from 'react'

interface SportFilterContextType {
  activeSport: string
  setActiveSport: (id: string) => void
}

const SportFilterContext = createContext<SportFilterContextType>({
  activeSport: 'football',
  setActiveSport: () => {},
})

export function SportFilterProvider({ children }: { children: React.ReactNode }) {
  const [activeSport, setActiveSport] = useState('football')
  return (
    <SportFilterContext.Provider value={{ activeSport, setActiveSport }}>
      {children}
    </SportFilterContext.Provider>
  )
}

export function useSportFilter() {
  return useContext(SportFilterContext)
}
