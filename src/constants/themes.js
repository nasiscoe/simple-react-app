import React from 'react';

export const themes = {
   light: {
     body: '#eee',
     text: '#000',
     subtle: 'rgba(0, 0, 0, 0.3)',
     white: '#eee',
     black: '#000',
     primary: 'purple'
   },
   dark: {
      body: '#000',
      text: '#eee',
      subtle: 'rgba(256, 256, 256, 0.3)',
      white: '#eee',
      black: '#000',
      primary: 'purple'
   },
 };

 export const ThemeContext = React.createContext(
   themes.light // default value
 );