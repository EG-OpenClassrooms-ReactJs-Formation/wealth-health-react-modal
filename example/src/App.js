import React, {useState} from 'react'

import Modal from 'wealth-health-react-modal'
import styles from 'wealth-health-react-modal/dist/index.css'


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} title={"Form sended"} content={"The employee has been created"}/>}
    </main>
  );
};

export default App


