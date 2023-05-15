import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { ComponentType, useState } from 'react';

const myTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'blue',
};

export function withTheme<T extends object>(Component: ComponentType<T>) {
  const WithTheme = (props: T) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ ...myTheme, colorScheme }} withGlobalStyles withNormalizeCSS>
          <Component {...props} />
        </MantineProvider>
      </ColorSchemeProvider>
    );
  };

  return WithTheme;
}
