import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormLabel } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="./privacy-policy">
        Parking Booking
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function ResetPassword() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
        <Typography component="h1" variant="h5">
          Reset your password
        </Typography>
        <FormLabel className="mt-4 text-center">
          Enter the email adress that was used to set up your account{' '}
        </FormLabel>
        <Box
          component="form"
          //  onSubmit={handleSubmit}  to do add resting password
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            className="min-h-12 rounded-md bg-gray-100 outline-1"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            className="min-h-12"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            RESET PASSWORD
          </Button>
          <Grid container className="flex justify-center">
            <Grid item>
              <Link href="/sign-in" variant="body2" className="pr-4">
                {'Sign In'}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
