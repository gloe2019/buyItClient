import countries from "../../data/Countries";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";

interface AddressProps {
  addressValues: any;
  changeAddressValue: Function;
  updateCheckbox: any;
}

const AddressForm = ({
  addressValues,
  changeAddressValue,
  updateCheckbox,
}: AddressProps) => {

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={addressValues.firstname}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            onChange={(e) => changeAddressValue("firstname", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={addressValues.lastname}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            onChange={(e) => changeAddressValue("lastname", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            value={addressValues.address1}
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            onChange={(e) => changeAddressValue("address1", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            value={addressValues.address2}
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e) => changeAddressValue("address2", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            value={addressValues.city}
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            onChange={(e) => changeAddressValue("city", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            value={addressValues.state}
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
            onChange={(e) => changeAddressValue("state", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            value={addressValues.zip}
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            onChange={(e) => changeAddressValue("zip", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={countries}
            getOptionLabel={(option) => option.value}
            renderInput={(params) => (
              <TextField
                label="country"
                name="country"
                variant="outlined"
                required
                {...params}
              />
            )}
            value={addressValues.country}
            onChange={(e, obj) => {
              changeAddressValue("country", obj.value);
            }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="yes"
                onClick={updateCheckbox}
              /> 
            }
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </Fragment>
  );
};

export default AddressForm;
