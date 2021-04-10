import { Fragment } from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Center, forwardRef } from '@chakra-ui/react';

import theme from '../../theme';
import { ColorModeButton } from '../colorModeButton';

// import Logo from '../../assets/coral.svg';

export const Container = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Fragment>
      <Box
        p={6}
        marginX={{ base: '0', md: 'auto' }}
        marginY={{ base: '0', md: 14 }}
        w={{ base: '100vw', md: '80vw' }}
        maxW={theme.breakpoints.md}
        minH={{ base: '100vh', md: '80vh' }}
        borderRadius={{ base: 'none', md: '2xl' }}
        layerStyle="muiCardColor"
        pos="relative"
        boxShadow="md"
        ref={ref}
        // overflow="hidden auto"
        {...props}
      >
        {/* <Logo style={{ position: 'absolute', top: '1.5rem', right: '0px', height: '2rem' }} /> */}
        {props.children}
      </Box>
      <ColorModeButton pos="fixed" top={6} right={6} />
    </Fragment>
  );
});

export const FlexContainer = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Container
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    ref={ref}
  >
    {props.children}
  </Container>
));
