import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  border-radius: 20px;
`;
export const Description = styled.div`
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  display: block;

  width: 100px;
  background-color: grey;
  border-radius: 50%;
`;
export const Username = styled.p`
  font-size: 20px;
`;
export const Tag = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;
export const Location = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;
export const Stats = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 35px;
`;
export const Item = styled.li`
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`;
export const Label = styled.span``;
export const Quantity = styled.span`
  font-weight: 700;
`;
