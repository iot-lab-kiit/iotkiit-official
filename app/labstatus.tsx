import { ThemeProvider, createTheme } from "@mui/material/styles";
import getConfig from "next/config";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import RequestForm from "@/components/statusPage/RequestForm";
import Image from "next/image";

// const { publicRuntimeConfig } = getConfig();
// const { SERVER } = publicRuntimeConfig;

const Status = () => {
  const [status, setStatus] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    //Getting Lab Status from Server
    fetch("https://api.iotkiit.in/items/status")
      .then((res) => res.json())
      .then((res) => {
        setStatus(res.data);
        setIsOpen(res.data.current_status !== "Closed");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: "#4763B7",
            },
          },
        })}
      >
        <Box
          width={"100%"}
          height={{ xs: "auto", md: "93vh" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={8}
        >
          {isOpen ? (
            <Image
              src="/images/open-img.svg"
              alt="open"
              width={303}
              height={225}
            />
          ) : (
            <Image
              src="/images/closed-img.svg"
              alt="closed"
              width={303}
              height={225}
            />
          )}

          <Box
            fontSize={{ xs: "34px", md: "44px" }}
            lineHeight={1.2}
            mt={5}
            textAlign={"center"}
          >
            <span>{isOpen ? "Welcome ! " : "Sorry ! "}</span>
            we're
            <span
              style={{
                fontSize: "50px",
                fontWeight: 700,
                color: isOpen ? "#4763B7" : "red",
              }}
            >
              {isOpen ? " OPEN " : " CLOSED"}
            </span>
          </Box>

          <Box mt={{ xs: 3, md: 1 }} />
          <RequestForm />
        </Box>

        <Box mt={{ xs: 10, md: 0 }} />
      </ThemeProvider>
    </>
  );
};

export default Status;
