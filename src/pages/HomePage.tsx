import React from 'react';
import CardItem from '../components/Cards';
import { Grid, Container, Text } from '@mantine/core';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const weeks = [
    { weekNumber: 1, title: 'Password Generator', status: 'done', link: '/week1' }, 
    { weekNumber: 2, title: 'Tic-Tac-Toe', status: 'done', link: '/week2'},
    { weekNumber: 3, title: 'Weather API', status: 'done', link: '/week3'},
    { weekNumber: 4, title: 'Connect 4', status: 'done', link: '/week4'},

  ];

  return (
    <Container size="lg" style={{ marginTop: '2rem' }}>
      <div>
        <Text size="xl" style={{ marginBottom: '2rem', fontWeight: 500, textAlign: 'center'}}>
          Snake Charmers Coding Challenge
        </Text>
      </div>
      <Grid>
        {weeks.map((week) => (
          <Grid.Col
            span={{ base: 12, xs: 6, md: 4, lg: 3 }}
            key={week.weekNumber}>
            <CardItem
              title={week.title}
              status={week.status}
              link={week.link}
            />
          </Grid.Col>
        ))}
      </Grid>
      <Footer/>
    </Container>
  );
};

export default HomePage;
