import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const Developer = () => {
  document.title = "Developer | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Developer" pageTitle="Developers" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Developer;
