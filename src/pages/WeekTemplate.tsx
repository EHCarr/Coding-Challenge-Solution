import React, { useState } from 'react';
import { Container, Grid, Card, Code } from '@mantine/core';

const WeekTemplate: React.FC = () => {
  // Task 1
  const [task1Result, setTask1Result] = useState<string>('');

  const t1Code = '';

  return (
    <Container size="sm">
      <h1 className="title mt-5">Week 3</h1>

      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Task 1</h2>
            <p>Find Max 3-Digit Product</p>
            <Code>{t1Code}</Code>

            <p className="mt-3">{task1Result}</p>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default WeekTemplate;
