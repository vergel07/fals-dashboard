import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const Setting = () => {
  document.title = "Setting | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Setting" pageTitle="Settings" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Setting;
