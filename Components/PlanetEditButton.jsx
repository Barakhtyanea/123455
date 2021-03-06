import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
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
const PlanetEditButton = ({ changeElement, changedObject, data }) => {
  console.log('EditButton', changeElement);
  const classes = useButtonStyles();
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const [nameValue, setNameValue] = useState(data.name);
  const [climateValue, setClimateValue] = useState(data.climate);
  const [terrainValue, setTerrainValue] = useState(data.terrain);
  const [populationValue, setPopulationValue] = useState(data.population);

  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };
  const handleChangeClimate = (event) => {
    setClimateValue(event.target.value);
  };
  const handleChangeTerrain = (event) => {
    setTerrainValue(event.target.value);
  };
  const handleChangePopulation = (event) => {
    setPopulationValue(event.target.value);
  };

  const handleClose = () => {``
    setOpen(false);
    data.name = nameValue;
    data.climate = climateValue;
    data.terrain = terrainValue;
    data.population = populationValue;
    changeElement(data);
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
              <TextField value={nameValue} label="Name" variant="filled" onChange={handleChangeName} />
              <TextField value={climateValue} label="Climate" variant="filled" onChange={handleChangeClimate} />
              <TextField value={terrainValue} label="Terrain" variant="filled" onChange={handleChangeTerrain} />
              <TextField value={populationValue} label="Population" variant="filled" onChange={handleChangePopulation} />
            </div>
          </form>
          <Tooltip title="Edit">
            <IconButton onClick={handleClose}>
              <CheckIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancel">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Backdrop>
    </div>
  );
};

export default PlanetEditButton;
