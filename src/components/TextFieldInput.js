import React from "react";
import options from "./options";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: "10rem",
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields({ field, handleChange }) {
  const classes = useStyles();
  const { name, type, fullWidth } = field;

  const renderOptions = () => {
    let optionItems = [];
    optionItems.push(
      <option key="none" value="" />
    );
    options[name].map(option =>
      optionItems.push(
        <option key={option} value={option}>
          {option}
        </option>
      )
    );
    return optionItems;
  };

  return (
    <div
      key={name}
      style={{ width: name === "Edition" || name === "Edition language" ? "auto" : "100%" }}
    >
      <TextField
        select={type !== "select" ? false : true}
        className={classes.textField}
        margin="dense"
        variant="outlined"
        label={name}
        fullWidth={fullWidth}
        type={type}
        onChange={e => handleChange(name, e.target.value)}
        SelectProps={
          type !== "select"
            ? null
            : {
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }
        }
        InputLabelProps={{
          shrink: true,
        }}
      >
        {type === "select" && renderOptions()}
      </TextField>
    </div>
  );
}
