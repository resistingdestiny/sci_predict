import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm } from "react-hook-form";


function Contact(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

   
  };

  return (
    <>
      {formAlert && (
        <Alert severity={formAlert.type} sx={{ mb: 3 }}>
          {formAlert.message}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container={true} spacing={2}>
            <Grid item={true} xs={12} md={6}>
              <TextField
                type="text"
                label="Name"
                name="name"
                error={errors.name ? true : false}
                helperText={errors.name && errors.name.message}
                fullWidth={true}
                inputRef={register({
                  required: "Please enter your name",
                })}
              />
            </Grid>
        

          <Grid item={true} xs={12} md={props.showNameField ? 6 : 12}>
            <TextField
              type="email"
              label="Email"
              name="email"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter your email",
              })}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              type="text"
              label="Message"
              name="message"
              multiline={true}
              rows={5}
              error={errors.message ? true : false}
              helperText={errors.message && errors.message.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter a message",
              })}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={pending}
            >
              {!pending && <span>Add Prediction</span>}

              {pending && <CircularProgress size={28} />}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Contact;