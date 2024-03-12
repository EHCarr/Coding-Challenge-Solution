import { Card, Text, Badge, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

type CardItemProps = {
  title: string;
  status: string;
  link: string;
};

const CardItem: React.FC<CardItemProps> = ({ title, status, link }) => {
  let badgeColor = 'green';
  const navigate = useNavigate();

  if (status === 'in progress') {
    badgeColor = 'yellow';
  }

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <Card
    shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color={badgeColor} variant="light">
          {status}
        </Badge>
      </Group>
      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={handleButtonClick}>
        Check out the solution
      </Button>
    </Card>
  );
};

export default CardItem;
