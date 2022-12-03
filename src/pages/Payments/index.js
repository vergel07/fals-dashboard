import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const Payments = () => {
  document.title = "Payments | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Payment" pageTitle="Payments" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payments;
