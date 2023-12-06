import {
  Section,
  StatisticItem,
  StatisticList,
  Percentage,
  Label,
  Title,
} from './Statistics.styled';

import { getRandomColor } from 'helpers/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} $color={getRandomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </Section>
  );
};
