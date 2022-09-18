import { useState } from 'react';
import BackgroundModal from './ui-kit/modals/background-modal/BackgroundModal';

import { Spinner } from './ui-kit/spinners/Spinner';

function App() {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpened(true)}>open</button>
      <BackgroundModal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <Spinner />
      </BackgroundModal>
    </>
  );
}

export default App;
