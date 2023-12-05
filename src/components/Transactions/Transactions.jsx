import { Table, Thead, Tr, Th, Tbody, Td } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <Tr key={id} $color={idx % 2 === 0 ? 'grey' : 'teal'}>
            <Td $color={1}>{type}</Td>
            <Td $color={1}>{amount}</Td>
            <Td $color={1}>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
