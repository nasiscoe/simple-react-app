import React from 'react';

export const themes = {
   primary: {
     body: '#eee',
     text: '#000',
     subtle: 'rgba(0, 0, 0, 0.3)'
   },
   secondary: {
      body: '#000',
      text: '#eee',
      subtle: 'rgba(256, 256, 256, 0.3)'
   },
 };

 export const ThemeContext = React.createContext(
   themes.primary // default value
 );