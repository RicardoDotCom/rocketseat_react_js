import { Play } from "phosphor-react";
import { 
   CountdownContainer, 
   FormContainer, 
   HomeContainer, 
   MintesAmountInput, 
   Separator, 
   StartCountdownButton, 
   TaskInput 
} from "./styles";

export function Home() {
   return (
      <HomeContainer>
         <form action="">
            <FormContainer>
               <label htmlFor="task">Vou trabalhar em</label>
               <TaskInput 
                  id="task" 
                  list="task-suggestions" 
                  placeholder="Dê um nome para o seu projeto" 
               />

               <datalist id="task-suggestions">
                  <option value="Pojeto 1" />
                  <option value="Pojeto 2" />
                  <option value="Pojeto 3" />
                  <option value="PlayStation" />
               </datalist>

               <label htmlFor="minutesAmount">durante</label>
               <MintesAmountInput 
                  type="number" 
                  id="minutesAmount" 
                  placeholder="00" 
                  step={5}
                  min={5}
                  max={60}
               />

               <span>minutos.</span>
            </FormContainer>

            <CountdownContainer>
               <span>0</span>
               <span>0</span>
               <Separator>:</Separator>
               <span>0</span>
               <span>0</span>
            </CountdownContainer>

            <StartCountdownButton disabled type="submit">
               <Play size={24} />
               Começar
            </StartCountdownButton>
         </form>
      </HomeContainer>
   )
}