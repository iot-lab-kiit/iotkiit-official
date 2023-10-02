import { Box, Button, Dialog, Grid, IconButton, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers";
// import dayjs from 'dayjs';
import CustomTextField from "./CustomTextField";

const teams: string[] = [
  "CP",
  "Web Dev",
  "App",
  "Marketing & Management",
  "Content",
  "GD & UI/UX",
  "IoT",
  "Cyber",
  "Administration(HR)",
  "Video Editing",
];

interface FormDataType {
  email: string;
  name: string;
  roll: string;
  team: string;
  selectedDate: Date;
  from: Date;
  to: Date;
  reason: string;
}

interface SubmitDataType {
  department: string;
  name: string;
  roll_no: string;
  time: string;
  reason: string;
}

const RequestForm: React.FC = () => {
  const [pop, setPop] = useState(false);
  const handleClick = () => setPop(true);
  const handleClose = () => setPop(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: "",
    team: "",
    selectedDate: new Date(),
    from: new Date(),
    to: new Date(),
    reason: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isDurationValid = (): boolean => {
    const diffMs: number = formData.to.getTime() - formData.from.getTime();
    const diffMinutes: number = Math.round(
      ((diffMs % 86400000) % 3600000) / 60000
    );
    return diffMinutes > 60; // Modify the validation logic as needed
  };

  const validate = (): boolean => {
    return (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.roll !== "" &&
      formData.team !== "" &&
      formData.reason !== ""
    );
  };

  const handleSubmit = () => {
    // Sending Lab Opening Request to Server
    const data: SubmitDataType = {
      department: formData.team,
      name: formData.name,
      roll_no: formData.roll,
      time: `${formData.to.getHours()}:${formData.to.getMinutes()}:${formData.to.getSeconds()}`,
      reason: formData.reason,
    };

    // Perform your fetch request here
    // Replace the following code with your actual API call
    fetch("https://api.iotkiit.in/items/lab_open_request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setFormData({
          name: "",
          email: "",
          roll: "",
          team: "",
          selectedDate: new Date(),
          from: new Date(),
          to: new Date(),
          reason: "",
        });
      })
      .catch((e) => {
        console.error(e);
      });
    setErrorMessage("");
    handleClose();
  };

  return (
    <div>
      <Button
        variant={"contained"}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          color: "#000",
          ":hover": { color: "#fff" },
        }}
      >
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
            <Box
              mt={1}
              mb={2}
              color={"#ACACAC"}
              fontSize={"15px"}
              alignSelf={"flex-start"}
            >
              Please enter the required details
            </Box>
            <CustomTextField
              label="Enter Name"
              type="text"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Box mt={2} />
            <CustomTextField
              label="Enter Email ID"
              type="email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Box mt={2} />
            <CustomTextField
              label="Enter Roll No."
              type="number"
              value={formData.roll}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, roll: e.target.value })
              }
            />
            <Box mt={2} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CustomTextField
                  label={"Team"}
                  select
                  value={formData.team}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, team: e.target.value })
                  }
                >
                  {teams.map((team, index) => (
                    <MenuItem key={index} value={team}>
                      {team.charAt(0).toUpperCase() + team.slice(1)}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    // inputFormat="dd/MM/yyyy"
                    value={formData.selectedDate}
                    onAccept={(e: Date | null) =>
                      setFormData({
                        ...formData,
                        selectedDate: e || new Date(),
                      })
                    }
                    // renderInput={(params: Date) => (
                    //   <CustomTextField
                    //     {...params}
                    //     label={"Date"}
                    //     InputProps={{ disableUnderline: true }}
                    //   />
                    // )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Box mt={2} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MobileTimePicker
                    label="From"
                    value={formData.from}
                    onAccept={(e: Date | null) =>
                      setFormData({
                        ...formData,
                        from: e || new Date(),
                      })
                    }
                    // renderInput={(params: Date) => (
                    //   <CustomTextField
                    //     {...params}
                    //     label={"From"}
                    //     InputProps={{ disableUnderline: true }}
                    //   />
                    // )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <MobileTimePicker
                    label="To"
                    value={formData.to}
                    onAccept={(e: Date | null) => {
                      if (isDurationValid()) {
                        setFormData({ ...formData, to: e || new Date() });
                        setErrorMessage("");
                      } else setErrorMessage("Enter a valid duration");
                    }}
                    // renderInput={(params: any) => (
                    //   <CustomTextField
                    //     {...params}
                    //     label={"To"}
                    //     InputProps={{ disableUnderline: true }}
                    //   />
                    // )}
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
              value={formData.reason}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, reason: e.target.value })
              }
            />

            {errorMessage !== "" && (
              <Box mt={2} color={"red"} fontSize={"14px"}>
                {errorMessage}
              </Box>
            )}
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
                ":disabled": {
                  border: "transparent",
                },
                border: "1px solid #000",
                color: "#000",
                ":hover": { color: "#fff" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default RequestForm;
