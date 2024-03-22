import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test ('password minimum length set by default', async () => {
  render(<App />);
  
});

test ('if no categories are selected, display error', async () => {
  render(<App />);


})

test ('password is displayed to user after button click', async () => {
  render(<App />);

 
});
