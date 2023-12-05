import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid black;
`;
export const Thead = styled.thead`
  font-size: 14px;
`;
export const Tr = styled.tr`
  padding: 15px;
  background-color: ${props => props.$color};
`;
export const Th = styled.th`
  background-color: #928115;
  padding: 10px 70px;
`;
export const Tbody = styled.tbody`
  font-size: 14px;
`;
export const Td = styled.td`
  border: 1px solid black;
`;
