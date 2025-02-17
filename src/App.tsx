import { useState } from "react";
import { sculptureList } from "./data.tsx";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Typography, Button, CardMedia } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import './styles.css';

const ExpandMore = styled(IconButton)<{ expand: boolean }>(({ theme, expand }) => ({
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function handleNextClick() {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  }

  function handleBackClick() {
    setIndex((prevIndex) => (prevIndex - 1 + sculptureList.length) % sculptureList.length);
  }

  const sculpture = sculptureList[index];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className="container">
      <Box component="section">
        <Typography variant="h3" component="h3" className="title">
          Actors and Actresses
        </Typography>
        <Typography className="subtitle">
          John Leo Medina - C-PEITEL3
        </Typography>

        <Stack direction="row" spacing={4} justifyContent="center" className="button-group">
          <Button
            onClick={handleBackClick}
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIosNewIcon />}
            className="button"
          >
            <Typography variant="h6">BACK</Typography>
          </Button>

          <Button
            onClick={handleNextClick}
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            className="button"
          >
            <Typography variant="h6">NEXT</Typography>
          </Button>
        </Stack>

        <Typography variant="h4" component="h2" className="artist">
          {sculpture.artist}
        </Typography>

        <Typography variant="h6" component="h6" className="index">
          ({index + 1} of {sculptureList.length})
        </Typography>

        <div className="card-container">

          <CardMedia
            component="img"
            image={sculpture.url}
            alt={sculpture.alt}
            className="fixed-size-image"
          />

        </div>

        <div className="expand-icon-container">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            className="expand-icon"
          >
            <ExpandMoreIcon fontSize="inherit" />
          </ExpandMore>
        </div>

        {expanded && (
          <Typography variant="body1" className="description">
            {sculpture.description}
          </Typography>
        )}
      </Box>
    </Container>
  );
}