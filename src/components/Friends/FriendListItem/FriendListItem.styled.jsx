import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;
export const Status = styled.span`
  background-color: ${props => props.$color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
