import { Box, Button, Dialog, Grid, IconButton, MenuItem, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from "@mui/x-date-pickers";
// import dayjs from 'dayjs';
import CustomTextField from "../CustomTextfield";

const RequestForm: React.FC = () => {
    const [pop, setPop] = useState(false);
    const handleClick = () => {
        setPop(true);
    };
    const handleClose = () => {
        setPop(false);
    };
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [roll, setRoll] = useState<string>('');
    const [team, setTeam] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [from, setFrom] = useState<Date>(new Date());
    const [to, setTo] = useState<Date>(new Date());
    const [reason, setReason] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const teams: string[] = [
        'CP', 'Web Dev', 'App', 'Marketing & Management', 'Content', 'GD & UI/UX',
        'IoT', 'Cyber', 'Administration(HR)', 'Video Editing'
    ];

    const isDurationValid = (): boolean => {
        const diffMs: number = to.getTime() - from.getTime();
        const diffMinutes: number = Math.round(((diffMs % 86400000) % 3600000) / 60000);
        return diffMinutes > 60; // Modify the validation logic as needed
    }

    const validate = (): boolean => {
        return (name !== '') && (email !== '') && (roll !== '') && (team !== '') && (reason !== '');
    }

    interface DataType {
        department: string,
        name: string,
        roll_no: string,
        time: string,
        reason: string
    }

    const handleSubmit = () => {
        // Sending Lab Opening Request to Server
        const data: DataType = {
            department: team,
            name,
            roll_no: roll,
            time: `${to.getHours()}:${to.getMinutes()}:${to.getSeconds()}`,
            reason: "Testing" // Modify the reason as needed
        };

        // Perform your fetch request here
        // Replace the following code with your actual API call
        fetch('https://api.iotkiit.in/items/lab_open_request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                setName('');
                setEmail('');
                setRoll('');
                setTeam('');
                setReason('');
            })
            .catch((e) => {
                console.error(e);
            });

        setErrorMessage('');
        handleClose();
    }
    return (
        <>
            <Button variant={'contained'} onClick={handleClick} sx={{ textTransform: 'none' }}>
                Request
            </Button>
            <Dialog
                open={pop}
                onClose={handleClose}
                sx={{
                    backdropFilter: "blur(3px)",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
            >
                <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box
                        py={3}
                        px={3}
                        zIndex={1}
                        width={"500px"}
                        bgcolor={"#FFF"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box
                            width={"100%"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Box fontSize={"22px"} fontWeight={600}>
                                Request
                            </Box>
                            <IconButton onClick={handleClose}>
                                <CloseIcon sx={{ color: "#000" }} />
                            </IconButton>
                        </Box>
                        <Box mt={1} mb={2} color={"#ACACAC"} fontSize={"15px"} alignSelf={'flex-start'}>
                            Please enter the required details
                        </Box>
                        <CustomTextField
                            label={"Enter Name"}
                            type={"text"}
                            value={name}
                            onChange={(event: any) => {
                                setName(event.target.value);
                            }}
                        />
                        <Box mt={2} />
                        <CustomTextField
                            label={"Enter Email ID"}
                            type={"email"}
                            value={email}
                            onChange={(event: any) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <Box mt={2} />
                        <CustomTextField
                            label={"Enter Roll No."}
                            type={"number"}
                            value={roll}
                            onChange={(event: any) => {
                                setRoll(event.target.value);
                            }}
                        />
                        <Box mt={2} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <CustomTextField
                                    label={"Team"}
                                    select
                                    value={team}
                                    onChange={(event: any) => {
                                        setTeam(event.target.value);
                                    }}
                                >
                                    {
                                        teams.map((team, index) => (
                                            <MenuItem key={index} value={team}>
                                                {
                                                    team === 'cp' ? team.toUpperCase() : team.charAt(0).toUpperCase() + team.slice(1)
                                                }
                                            </MenuItem>
                                        ))
                                    }
                                </CustomTextField>
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <MobileDatePicker
                                        inputFormat="dd/MM/yyyy"
                                        value={selectedDate}
                                        onChange={(value: any) => {
                                            setSelectedDate(value);
                                            setFrom(value);
                                            setTo(value)
                                        }}
                                        renderInput={(params: any) => (
                                            <CustomTextField
                                                {...params}
                                                label={"Date"}
                                                InputProps={{ disableUnderline: true }}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Box mt={2} />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <MobileTimePicker
                                        label="Time"
                                        value={from}
                                        onChange={(value: any) => {
                                            setFrom(value);
                                            setErrorMessage('')
                                        }}
                                        renderInput={(params: Date) => (
                                            <CustomTextField
                                                {...params}
                                                label={"From"}
                                                InputProps={{ disableUnderline: true }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MobileTimePicker
                                        label="Time"
                                        value={to}
                                        onChange={(value: any) => {
                                            if (isDurationValid()) {
                                                setTo(value);
                                                setErrorMessage('')
                                            }
                                            else setErrorMessage('Enter a valid duration')
                                        }}
                                        renderInput={(params: any) => (
                                            <CustomTextField
                                                {...params}
                                                label={"To"}
                                                InputProps={{ disableUnderline: true }}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </LocalizationProvider>
                        <Box mt={2} />
                        <CustomTextField
                            fullWidth
                            label={"Reason"}
                            type={"text"}
                            multiline={true}
                            rows={3}
                            value={reason}
                            onChange={(event: any) => {
                                setReason(event.target.value);
                            }}
                        />

                        {
                            errorMessage !== '' && (
                                <Box mt={2} color={'red'} fontSize={'14px'}>
                                    {errorMessage}
                                </Box>
                            )
                        }
                        <Box mt={4} />
                        <Button
                            disableElevation
                            disabled={!validate()}
                            onClick={handleSubmit}
                            variant={"contained"}
                            fullWidth
                            sx={{
                                borderRadius: "15px",
                                zIndex: 2,
                                py: 1.5,
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default RequestForm;