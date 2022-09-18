import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactElement;
}

const Portal: FC<Props> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;
