// BitcoinRates.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import useBitcoinRates from "./useBitcoinRates";
import { useEmoji } from "./EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const price = useBitcoinRates(currency);
  const { emoji, changeEmoji } = useEmoji();

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Bitcoin Exchange Rate
      </Typography>
      <Box sx={{ my: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Choose currency</InputLabel>
          <Select
            value={currency}
            label="Choose currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencies.map((curr) => (
              <MenuItem value={curr} key={curr}>
                {curr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {price !== null ? (
        <Typography variant="h6">
          1 Bitcoin = {price} {currency}
        </Typography>
      ) : (
        <CircularProgress />
      )}
      <Box sx={{ my: 2 }}>
        <Typography variant="h6">Current Mood: {emoji}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeEmoji("😎")}
        >
          Change Mood
        </Button>
      </Box>
    </Container>
  );
}

export default BitcoinRates;
