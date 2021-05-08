import React from 'react';

import WelcomeView from './WelcomeView';

export interface Props { }

const AuthenticationPage: React.FC<Props> = () => {
  return (
    <div className="w-full sm:w-[470px] max-w-[400px] sm:max-w-full mx-auto flex flex-col items-center">
      <div className="bg-logo bg-contain bg-center bg-no-repeat w-full h-[100px] sm:h-[128px] mt-12 mb-16 sm:mb-[150px]" />
      <div className="bg-white py-4 sm:py-12 px-6 sm:px-16 flex flex-col items-center mb-4 w-full">
        <WelcomeView />
      </div>
      <a href="#">Need help?</a>
    </div>
  )
}

export default AuthenticationPage;
