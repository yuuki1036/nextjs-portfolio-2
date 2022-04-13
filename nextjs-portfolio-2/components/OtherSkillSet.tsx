import React, { VFC } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowRight, Launch } from "@mui/icons-material";
import { OtherSkill } from "types/other-skills";

type Props = {
  title: string;
  skills: OtherSkill[];
};

const OtherSkillSet: VFC<Props> = ({ title, skills }) => (
  <Box
    sx={{
      backgroundColor: "info.main",
      mt: "4rem",
      p: "2rem",
    }}
  >
    <Typography
      variant="h4"
      sx={{ color: "secondary.main", fontWeight: "bold" }}
    >
      {title}
    </Typography>
    <List>
      {skills.map((data, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary={data.txt} />
            {data.href && (
              <ListItemSecondaryAction>
                <a
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <Launch />
                  </IconButton>
                </a>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        );
      })}
    </List>
  </Box>
);

export default OtherSkillSet;
