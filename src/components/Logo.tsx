import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/squeaky-duck.png" 
        alt="Squeaky Spring Cleaning Duck Mascot" 
        className="h-12 w-12"
      />
      <span className="text-2xl font-bold text-white">Squeaky Spring Cleaning</span>
    </div>
  );
}