'use client';
import localFont from 'next/font/local'
import { createTheme } from '@mui/material/styles';

const myFont = localFont({
    src: '../public/Noor-Regular.ttf',
    display: 'swap',
  })
  

const theme = createTheme({
  typography: {
    fontFamily: myFont.style.fontFamily,
  },
  
  direction:"rtl"

});

export default theme;
