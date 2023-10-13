import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
  typeHere: {
    border: '1px solid #EAEAEA',
    padding: '11px 11px',
    width: '100%',
    borderRadius: 15,
    fontSize: 14,
  },
  input: {
    fontWeight: 500,
    '&::placeholder': {
      fontWeight: 400,
      fontSize: 14,
    },
  },
}));

const RedditTextField = styled(props => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& input[type=number]': {
    '-moz-appearance': 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '& .MuiFilledInput-root': {
    border: '2px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomTextField = (params: any) => {
  const {
    error,
    autoFocus,
    placeholder,
    onChange,
    onKeyDown,
    value,
    label,
    type,
    multiline,
    rows,
    img,
    endAdornment,
  } = params;
  const classes = useStyles();

  return (
    <>
      {type === 'date' ? (
        <TextField
          {...params}
          InputProps={{
            disableUnderline: true,
            classes: { input: classes.input },
            endAdornment: endAdornment,
          }}
          className={classes.typeHere}
          variant='standard'
        />
      ) : (
        <RedditTextField
          {...params}
          sx={{ width: '100%' }}
          variant='filled'
          color={'primary'}
        />
      )}
    </>
  );
};

export default CustomTextField;
