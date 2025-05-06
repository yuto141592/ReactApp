import React from 'react';
import { Button, Container, Typography, Box, Card, CardContent } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Material-UI with React
        </Typography>
        <Typography variant="h6" paragraph>
          This is a simple React app using Material-UI (MUI) for a modern design.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Primary Button
        </Button>
      </Box>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is some content inside the card.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
