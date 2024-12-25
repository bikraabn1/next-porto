'use client'

import SplashScreen from '@/app/components/SplashScreen'
import { useState } from 'react';
import MainContent from './MainContent';

export default function Main() {

  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true)

  const handleAnimationComplete = () => {
    setShowSplashScreen(false)
  }

  return (
    <div>
      {showSplashScreen && <SplashScreen onAnimationComplete={handleAnimationComplete} />}

      {!showSplashScreen && (
        <>
          <MainContent />
        </>
      )}
      
    </div>
  );
}
