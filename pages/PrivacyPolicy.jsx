import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

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

export default function PrivacyPolicy() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h2 className="tac">Privacy Policy</h2>
      <h3 className="tac">Effective Date: February 5, 2023</h3>
      <Box sx={{ width: "100%" }} className="df">
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="left-bx"
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            style={{ overflow: "visible" }}
          >
            <Tab label="Introduction" {...a11yProps(0)} />
            <Tab label="Information Collection" {...a11yProps(1)} />
            <Tab label="Information Use" {...a11yProps(2)} />
            <Tab label="Information Sharing and Disclosure" {...a11yProps(3)} />
            <Tab label="Cookies and Tracking Technologies" {...a11yProps(4)} />
            <Tab label="Security" {...a11yProps(5)} />
            <Tab label="Changes to this Policy" {...a11yProps(6)} />
            <Tab label="Contact Information" {...a11yProps(7)} />
          </Tabs>
        </Box>
        <div style={{ marginTop: "7%", width: "75%" }}>
          <TabPanel value={value} index={0}>
            This privacy policy outlines how we (NaukariKosh) collects, uses,
            and protects the personal information of users (“user”, “you”, or
            “your”) of the Website. By accessing or using the Website, you
            acknowledge and agree to this privacy policy and our terms of use.
            If you do not agree with this privacy policy, please do not use the
            Website. At NaukariKosh, we are committed to protecting the privacy
            and security of our users. This policy only applies to the
            information collected through our website and does not apply to
            information collected offline.
          </TabPanel>
          <TabPanel value={value} index={1}>
            We may collect personal information such as your name, email
            address, and other information you choose to provide through forms
            or other means on our website. We may also collect non-personal
            information such as IP addresses, browser types, and access times to
            better understand how our website is used and to improve our
            services.
          </TabPanel>
          <TabPanel value={value} index={2}>
            The personal information we collect is used to respond to your
            requests, provide you with information and services, and improve our
            website. We may also use your personal information to send you
            updates and news.
          </TabPanel>
          <TabPanel value={value} index={3}>
            <p>
              <b>
                {" "}
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties.
              </b>{" "}
              We may share your personal information with third-party service
              providers for the purpose of processing transactions or providing
              services on our behalf. These third-party service providers are
              bound by confidentiality agreements and are not allowed to use
              your information for any purpose other than as specified by us.
            </p>
            <p>
              We may also disclose your personal information if required by law,
              to enforce our policies, or to protect the rights, property, or
              safety of our website, our users, or others.
            </p>
          </TabPanel>
          <TabPanel value={value} index={4}>
            We may use cookies and other tracking technologies to improve the
            user experience on our website and to gather information about how
            our website is used. You can control the use of cookies through your
            browser settings.
          </TabPanel>
          <TabPanel value={value} index={5}>
            We take reasonable measures to protect the security of your personal
            information. However, no data transmission over the internet or data
            storage system can be guaranteed to be 100% secure. As a result, we
            cannot guarantee the security of any information you transmit to us
            and you do so at your own risk.
          </TabPanel>
          <TabPanel value={value} index={6}>
            We may update this Privacy Policy from time to time. If we make
            changes to this policy, we will update the Effective Date at the top
            of this page and provide notice of any material changes on our
            website.
          </TabPanel>
          <TabPanel value={value} index={7}>
            If you have any questions or concerns about our Privacy Policy,
            please reach out us at{" "}
            <span style={{ color: "blue" }}>
              {" "}
              <Link href="/ContactUS">Contact Us</Link>
            </span>
            .
          </TabPanel>
        </div>
      </Box>
    </>
  );
}
