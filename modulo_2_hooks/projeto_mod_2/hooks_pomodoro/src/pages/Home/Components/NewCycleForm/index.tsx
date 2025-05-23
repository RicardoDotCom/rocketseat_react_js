import { FormContainer, MintesAmountInput, TaskInput } from "./styles";
import { useContext } from 'react';
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
   const { activeCycle } = useContext(CyclesContext)
   const { register } = useFormContext()
   
   return (
      <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 
               id="task" 
               list="task-suggestions" 
               placeholder="Dê um nome para o seu projeto" 
               disabled={!!activeCycle}
               {...register('task')}
            />

            <datalist id="task-suggestions">
               <option value="Projeto 1" />
               <option value="Projeto 2" />
               <option value="Projeto 3" />
               <option value="PlayStation" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MintesAmountInput 
               type="number" 
               id="minutesAmount" 
               placeholder="00" 
               step={1}
               min={1}
               max={60}
               disabled={!!activeCycle}
               {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
         </FormContainer>
   )
}