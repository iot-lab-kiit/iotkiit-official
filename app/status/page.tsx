import { ThemeProvider, createTheme } from '@mui/material/styles';
import getConfig from 'next/config';
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import RequestForm from "../../components/statusPage/RequestForm";
const { publicRuntimeConfig } = getConfig();
const { SERVER } = publicRuntimeConfig;

const Status = () => {
    const [isLoading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        //Getting Lab Status from Server
        async function setStatus() {
            await fetch('https://api.iotkiit.in/items/status')
                .then((res) => res.json())
                .then((res) => {
                    setIsOpen(res.data.current_status === 'opened')
                    setLoading(false)
                })
        }

        setStatus()
    }, [])

    return (
        <>
            <ThemeProvider theme={createTheme({
                palette: {
                    primary: {
                        main: '#4763B7',
                    },
                },
            })}>

                {
                    !isLoading ? (
                        <Box width={'100%'} height={{ xs: 'auto', md: '93vh' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pt={8}>
                            {
                                isOpen ? (
                                    <img src="/images/open-img.svg" alt="open" />
                                ) : (<img src="/images/closed-img.svg" alt="closed" />)
                            }
                            <Box fontSize={{ xs: '34px', md: '44px' }} lineHeight={1.2} mt={5} textAlign={'center'} >
                                <span>{isOpen ? 'Welcome ! ' : 'Sorry ! '}</span>
                                we're
                                <span style={{ fontSize: '50px', fontWeight: 700, color: isOpen ? '#4763B7' : 'red' }}>{isOpen ? ' OPEN ' : ' CLOSED'}</span>
                            </Box>

                            <Box mt={{ xs: 3, md: 1 }} />
                            <RequestForm />

                        </Box>
                    ) : (<Box width={'100%'} height={{ xs: 'auto', md: '93vh' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pt={8}>
                        <Box fontSize={{ xs: '34px', md: '44px' }} lineHeight={1.2} mt={5} textAlign={'center'}>
                            <span style={{ fontSize: '50px', fontWeight: 700, color: '#4763B7' }}>Hold On! We're Fetching the Details . . </span>
                        </Box>
                    </Box>)
                }


                <Box mt={{ xs: 10, md: 0 }} />
            </ThemeProvider>
        </>
    )
}

export default Status;