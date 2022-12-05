import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const Customer = () => {
  document.title = "Customer | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Customer" pageTitle="Customers" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Customer;
