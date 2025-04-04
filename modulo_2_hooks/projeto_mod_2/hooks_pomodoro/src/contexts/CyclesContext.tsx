import { createContext, ReactNode, useState } from "react"

interface CreateCycleData {
   task: string
   minutesAmount: number
}

interface Cycle {
   id: string
   task: string
   minutesAmount: number
   startDate: Date
   interruptedDate?: Date
   finishedDate?: Date
}

interface CyclesContexType {
   cycles: Cycle[]
   activeCycle: Cycle | undefined
   activeCycleId: string | null
   amountSecondsPassed: number
   createNewCycle: (data: CreateCycleData) => void
   markCurrentCycleAsFinished: () => void
   setSecondsPassed: (seconds: number) => void
   interruptCurrentCycle: () => void
}

interface CyclesContextProviderProps {
   children: ReactNode
}
 
export const CyclesContext = createContext({} as CyclesContexType)
 
export function CyclesContexProvider({ children }: CyclesContextProviderProps) {
   const [cycles, setCycle] = useState<Cycle[]>([])
   const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
   const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

   const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId)

   
   function setSecondsPassed(seconds: number) {
      setAmountSecondsPassed(seconds)
   }

   function markCurrentCycleAsFinished() {
      setCycle((state) => 
         state.map((cycle) => {
            if (cycle.id == activeCycleId) { 
               return { ...cycle, finishedDate: new Date() }
            } else { 
               return cycle 
            }
         }),
      )
   }

   function createNewCycle(data: CreateCycleData) {
      const id = String(new Date().getTime())

      const newCycle: Cycle ={
         id, 
         task:data.task,
         minutesAmount: data.minutesAmount,
         startDate: new Date()
      }

      setCycle((state) => [...state, newCycle])
      setActiveCycleId(id)
      setAmountSecondsPassed(0)
   }

   function interruptCurrentCycle() {
      setCycle((state) => 
         state.map((cycle) => {
            if (cycle.id == activeCycleId) { 
               return { ...cycle, interruptedDate: new Date() }
            } else { 
               return cycle 
            }
         }),
      )
      setActiveCycleId(null)
   }
   
   return (
      <CyclesContext.Provider 
         value={{ 
            cycles,
            activeCycle, 
            activeCycleId, 
            markCurrentCycleAsFinished, 
            amountSecondsPassed,
            setSecondsPassed,
            createNewCycle,
            interruptCurrentCycle
         }}
      >
         { children }
      </CyclesContext.Provider>
   )
}
 