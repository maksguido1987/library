import { useState } from 'react';
import BackgroundModal from './ui-kit/modals/background-modal/BackgroundModal';

function App() {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpened(true)}>open</button>
      <BackgroundModal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <div>wqqqwssqw</div>
      </BackgroundModal>
    </>
  );
}

export default App;
