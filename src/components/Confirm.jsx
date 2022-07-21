import { Button, List, ListItemText, ListItem } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
const Confirm = () => {
  const { prevoiusHandler, formValueObject } = useContext(AppContext);

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="Country" secondary={formValueObject.country} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Province"
            secondary={formValueObject.province}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gender" secondary={formValueObject.gender} />
        </ListItem>
      </List>
      <Button onClick={prevoiusHandler}> previous</Button>
    </div>
  );
};

export default Confirm;
