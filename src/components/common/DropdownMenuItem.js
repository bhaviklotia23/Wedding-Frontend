import React, { useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DropdownMenuItem = ({ title, items, handleCloseNavMenu }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton onClick={handleItemClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />} {/* Dropdown arrow icon */}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: "24px", // Indentation for dropdown items
              }}
              onClick={() => {
                handleCloseNavMenu();
                navigate(item.path);
              }}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default DropdownMenuItem;
