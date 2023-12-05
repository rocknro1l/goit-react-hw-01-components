import styled from 'styled-components';

export const Section = styled.section`
  color: grey;
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const StatisticItem = styled.li`
  background-color: ${props => props.$color};
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
`;

export const Label = styled.span`
  color: white;
`;

export const Percentage = styled.span`
  color: white;
`;
