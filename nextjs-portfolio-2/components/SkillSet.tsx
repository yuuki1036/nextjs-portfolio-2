import React, { VFC } from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { Skill } from "types/skills";

type Props = {
  title: string;
  skills: Skill[];
};

const SkillSet: VFC<Props> = ({ title, skills }) => (
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
    <Grid container spacing={2} alignItems="baseline">
      {skills.map((skill, i) => {
        const items = skill.items;
        return (
          <Grid item xs={6} md={3} key={i}>
            <Box sx={{ mt: "1rem" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                {skill.title}
              </Typography>
              <Divider />
              <List>
                {items.map((item, j) => {
                  return (
                    <ListItemText primary={item} key={j} />
                  );
                })}
              </List>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  </Box>
);

export default SkillSet;
