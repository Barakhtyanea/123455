import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function FormPropsTextFields(props) {
  const [nameValue, setNameValue] = useState(props.data.name);
  const [birthYearValue, setBirthYearValue] = useState(props.data.birth_year);
  const [eyeColorValue, setEyeColorValue] = useState(props.data.eye_color);
  const [hairColorValue, setHairColorValue] = useState(props.data.hair_color);
  console.log('Value', props.data);
  const classes = useStyles();
  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };
  const handleChangeBirthYear = (event) => {
    setBirthYearValue(event.target.value);
  };
  const handleChangeEyeColor = (event) => {
    setEyeColorValue(event.target.value);
  };
  const handleChangeHairColor = (event) => {
    setHairColorValue(event.target.value);
  };

  const editedArray = [nameValue, birthYearValue, eyeColorValue, hairColorValue, props.data.key];

  console.log('editedArray', editedArray);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField value={nameValue} required id="standard-required" label="Name" variant="filled" onChange={handleChangeName} />
        <TextField value={birthYearValue} required id="standard-required" label="Birth year" variant="filled" onChange={handleChangeBirthYear} />
        <TextField value={eyeColorValue} required id="standard-required" label="Eye color" variant="filled" onChange={handleChangeEyeColor} />
        <TextField value={hairColorValue} required id="standard-required" label="Hair color" variant="filled" onChange={handleChangeHairColor} />
      </div>
    </form>
  );
}

