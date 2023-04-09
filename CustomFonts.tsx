import { Global } from '@mantine/core';

export function CustomFonts() {
  return (
    <Global
      styles={[
        
        {
            '@font-face': {
              fontFamily: 'Abstract',   /*Can be any text*/
              src: 'local("ABSTRACT"), url("./font/ABSTRACT.ttf") format("truetype")',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Digit',   /*Can be any text*/
              src: 'local("Digit"), url("./font/Digit.ttf") format("truetype")',
            },
          },
        //   {
        //     '@font-face': {
        //       fontFamily: 'SpaceAge',   /*Can be any text*/
        //       src: 'local("SpaceAge"), url("./font/SpaceAge.ttf") format("truetype")',
        //     },
        //   },
      ]}
    />
  );
}
