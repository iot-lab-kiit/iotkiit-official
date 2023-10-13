'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const PageNotFound = () => {
  const asPath = usePathname();
  const [path, setPath] = useState(asPath);
  useEffect(() => {
    setPath(asPath);
  }, [asPath]);
  return (
    <>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: '#4763B7',
            },
          },
        })}
      >
        <Box
          width={'100%'}
          height={{ xs: 'auto', md: '93vh' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          pt={8}
        >
          <Image
            src='/images/closed-img.svg'
            alt='closed'
            height={225}
            width={303}
          />

          <Box
            fontSize={{ xs: '34px', md: '44px' }}
            lineHeight={1.2}
            mt={5}
            textAlign={'center'}
          >
            we don't any page with name
            <span
              style={{
                fontSize: '50px',
                fontWeight: 700,
                color: 'red',
              }}
            >
              {' ' + path}
            </span>
          </Box>
          <Box mt={{ xs: 3, md: 1 }} />
        </Box>
        <Box mt={{ xs: 10, md: 0 }} />
      </ThemeProvider>
    </>
  );
};

export default PageNotFound;
