import React from 'react';
import { Modal, useModal } from './lib';

const App = () => {
  const { openModal } = useModal();

  const onClick = () => {
    openModal({
      content: (
        <div>
          <Modal.Overlay
            as={
              <div className='absolute w-full h-full bg-black opacity-20 top-0'></div>
            }
          />
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className='relative mx-auto my-0 w-1/2 h-64 bg-white rounded-lg p-4'>
              <Modal.Closer
                as={
                  <button
                    className='absolute right-4 top- text-xl'
                    type='submit'>
                    작성하기
                  </button>
                }
              />
            </form>
          </div>
        </div>
      ),
    });
  };

  return (
    <div>
      <button onClick={onClick}>클릭</button>
    </div>
  );
};

export default App;
