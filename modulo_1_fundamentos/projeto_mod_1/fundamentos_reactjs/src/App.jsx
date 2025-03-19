import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
   return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Ricardo Andrade" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis tempore quisquam recusandae vitae, nihil eos possimus consequuntur? "
          />
          <Post 
            author="Ricardo Andrade" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis tempore quisquam recusandae vitae, nihil eos possimus consequuntur? Ducimus vitae molestias amet architecto impedit iure obcaecati voluptatibus quos eaque maiores!"
          />
        </main>
      </div>
    </div>
  )
}
