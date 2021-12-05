import { Fragment, useState } from "react";
import Review from "./Review";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
//import Stepper from "@mui/material/Stepper";
//Components
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { Typography } from "@mui/material";

const steps = [ "Shipping address", "Payment details", "Review your order" ];

function getStepContent(step: number, formValues?: any, changeFormValue?: any, toggleCheckbox?: any) {
  switch (step) {
    case 0:
      return <AddressForm addressValues={formValues} changeAddressValue={changeFormValue} updateCheckbox={toggleCheckbox} />;
    case 1:
      return <PaymentForm paymentValues={formValues} changePaymentValue={changeFormValue} />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const Index = () => {
  const [ addressFormValues, setAddressFormValues ] = useState({});
  const [ paymentFormValues, setPaymentFormValues ] = useState({});
  const [ isChecked, setChecked ] = useState(false)
  const [ activeStep, setActiveStep ] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  // interface KeyValuePair {
  //   key: string;
  //   value: string;

  const changeAddressFormValue = (key: unknown, value: unknown) => {
    if (typeof key === "string" && typeof value === "string") {
      let values: any = { ...addressFormValues };
      values[ key ] = value;
      setAddressFormValues(values);
    }
  };

  const toggleCheckbox = () => {
    setChecked(!isChecked)
  }

  const changePaymentFormValue = (key: unknown, value: unknown) => {
    if (typeof key === "string" && typeof value === "string") {
      let values: any = { ...paymentFormValues };
      values[ key ] = value;
      setPaymentFormValues(values);
    }
  };
  // const changeAddressFormValue = (addy:KeyValuePair) = {
  //   key: 
  // }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Fragment>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography>
                Thank you for your order!
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              {
                activeStep === 0 ?
                  getStepContent(activeStep, addressFormValues, changeAddressFormValue, toggleCheckbox)
                  : getStepContent(activeStep, paymentFormValues, changePaymentFormValue)}
              <Box>
                {activeStep !== 0 && (
                  <Button onClick={handleBack}>
                    Back
                  </Button>
                )}
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </Fragment>
          )}

        </Fragment>
      </Paper>
    </Container>
  );
};

export default Index;
