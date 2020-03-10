import React, {useState} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';

const useButtonStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function EditButton(props) {
  console.log('EditButton', props);
  const classes = useButtonStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const [nameValue, setNameValue] = useState(props.data.name);
  const [birthYearValue, setBirthYearValue] = useState(props.data.birth_year);
  const [eyeColorValue, setEyeColorValue] = useState(props.data.eye_color);
  const [hairColorValue, setHairColorValue] = useState(props.data.hair_color);

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

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton aria-label="Edit" onClick={handleToggle}>
          <CreateIcon />
        </IconButton>
      </Tooltip>
      <Backdrop className={classes.backdrop} open={open}>
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField value={nameValue} required id="standard-required" label="Name" variant="filled" onChange={handleChangeName} />
              <TextField value={birthYearValue} required id="standard-required" label="Birth year" variant="filled" onChange={handleChangeBirthYear} />
              <TextField value={eyeColorValue} required id="standard-required" label="Eye color" variant="filled" onChange={handleChangeEyeColor} />
              <TextField value={hairColorValue} required id="standard-required" label="Hair color" variant="filled" onChange={handleChangeHairColor} />
            </div>
          </form>
        <Tooltip title='Edit'>
          <IconButton onClick={handleClose, props.changeElement}>
            <CheckIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Cancel'>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
        </div>
      </Backdrop>
    </div>
  );
}
