import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box
        sx={{
          minHeight: "90vh",
          bgcolor: "#f7f7f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: 3,
            p: isMobile ? 3 : 5,
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            We'd love to hear from you! Reach out to us anytime.
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ bgcolor: "#333", color: "white", fontWeight: "bold" }}
                  >
                    Contact Information
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", mr: 1 }} />
                    1800-00-0000 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "skyblue", mr: 1 }} />
                    tejaswini@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", mr: 1 }} />
                    1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
