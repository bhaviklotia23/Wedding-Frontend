import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Box textAlign="center" mt={3}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        Decrement
      </Button>
    </Box>
  );
};

export default Counter;
