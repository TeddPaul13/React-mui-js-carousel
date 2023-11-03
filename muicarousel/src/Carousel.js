import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Carousel() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  // Configuring carousel behavior
  const cardsPerPage = 4;
  const duplicateCards = Array.from({ length: 10 }, (_, i) => (
    <Card key={i}><CardActionArea>
    <CardMedia
      component="img"
      height="140"
      image="/static/images/cards/contemplative-reptile.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </CardActionArea></Card>
  ));
  //Function to Navigate the  carousel
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  //Setting Card data

  useEffect(() => {
    setCards(duplicateCards);
  });

  return (
    <>
    
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        {" "}
        <IconButton
          onclick={handlePrevPage}
          sx={{ margin: 5 }}
          disabled={currentPage === 0}
        >
          <NavigateBeforeIcon />
        </IconButton>
        {cards
          .slice(
            currentPage * cardsPerPage,
            currentPage * cardsPerPage + cardsPerPage
          )
          .map((card, index) => (
            <div key={index}>{card}
            <div
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
            }}
          >
          
        <Slide direction={slideDirection} in={currentPage === index}>
          {card}
        </Slide>
        </div>
        </div>
  ))}
        <Stack
          spacing={2}
          direction="row"
          alignContent="center"
          justifyContent="center"
        >
          
        </Stack>
        <IconButton
          onClick={handleNextPage}
          sx={{ margin: 5 }}
          disabled={
            currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
          }
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    
    </>
  );
}

export default Carousel;
