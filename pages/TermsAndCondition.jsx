import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TermsAndCondition() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="df">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="left-bx">
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{ overflow: "visible" }}
        >
          <Tab label="Introduction" {...a11yProps(0)} />
          <Tab label="Intellectual property rights" {...a11yProps(1)} />
          <Tab label="License to use website" {...a11yProps(2)} />
          <Tab label="Limitations of liability" {...a11yProps(3)} />
          <Tab label="Disclaimer of warranties" {...a11yProps(4)} />
          <Tab label="Changes to the terms and conditions" {...a11yProps(5)} />
          <Tab label="Governing law" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <div style={{marginTop: "10%", width: "75%"}}>
      <TabPanel value={value} index={0}>
        These terms and conditions govern your use of our website; by using our
        website, you accept these terms and conditions in full. If you disagree
        with these terms and conditions or any part of these terms and
        conditions, you must not use our website.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Unless otherwise stated, we or our licensors own the intellectual
        property rights in the website and material on the website. Subject to
        the license below, all these intellectual property rights are reserved.
      </TabPanel>
      <TabPanel value={value} index={2}>
        You may view, download for caching purposes only, and print pages from
        the website for your own personal use, subject to the restrictions set
        out below and elsewhere in these terms and conditions.
      </TabPanel>
      <TabPanel value={value} index={3}>
        The information on this website is provided free-of-charge, and you
        acknowledge that it would be unreasonable to hold us liable in respect
        of this website and the information on this website.
      </TabPanel>
      <TabPanel value={value} index={4}>
        We do not guarantee that the website will be secure or free from bugs or
        viruses.
      </TabPanel>
      <TabPanel value={value} index={5}>
        We may revise these terms and conditions from time-to-time. Please check
        this page regularly to ensure you are familiar with the current version.
      </TabPanel>
      <TabPanel value={value} index={6}>
        We may revise these terms and conditions from time-to-time. Please check
        this page regularly to ensure you are familiar with the current version.
      </TabPanel>
      </div>
    </Box>
  );
}
