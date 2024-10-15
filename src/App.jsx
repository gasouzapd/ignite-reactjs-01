import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gabriel Pereira" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facere porro veniam magni minus perferendis omnis harum libero aspernatur. Neque repellat eos vel et quod consectetur, dolore ipsa numquam accusantium."
          />

          <Post 
            author="Gabriel Pereira1 " 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere quam iste tenetur nemo consequatur, quasi velit blanditiis, laborum ipsam cum adipisci! Itaque natus, impedit aperiam et voluptates quos iste?"
          />
        </main>
      </div>
    </div>
  )
}

export default App

