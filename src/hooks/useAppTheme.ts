import { ThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

export const useAppTheme = () => useContext(ThemeContext);
