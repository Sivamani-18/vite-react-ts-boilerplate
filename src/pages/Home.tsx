import React, { useState } from 'react';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex items-center justify-center min-h-[50vh] bg-background-light dark:bg-background-dark'>
      <div className='text-center'>
        <div className='flex justify-center mb-6'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1 className='text-3xl font-bold text-primary-light dark:text-primary-dark'>
          Hello, Vite + React + TypeScript + Tailwind CSS!
        </h1>
        <div className='card mt-6'>
          <button
            onClick={() => setCount((count) => count + 1)}
            className='btn text-text-light'
          >
            count is {count}
          </button>
          <p className='mt-3'>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs mt-6'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
};

export default Home;
