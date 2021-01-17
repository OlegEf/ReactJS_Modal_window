import React from 'react';
import ReactDOM from 'react-dom';

import ButtonMmodal from './Modal';

const Modal = () => {
  return (
		<div className="modal">
			modal
		</div>
  );
}

const App = () => {

  return (
    <div>
      <Modal />
      <ButtonMmodal />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));