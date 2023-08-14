import { Table, TBody, Td, TFoot, THead, Tr } from '../src';

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export const Default = () => (
  <Table>
    <THead>
      <Td colSpan={5}>Title</Td>
      <Td colSpan={3} hidden="tablet">
        Last Modified
      </Td>
      <Td colSpan={3} hidden="mobile">
        Created
      </Td>
      <Td colSpan={3}>Category</Td>
    </THead>
    <TBody>
      <Tr as="link" href="#">
        <Td>Some title</Td>
        <Td>Some date</Td>
        <Td>Some date</Td>
        <Td>Some category</Td>
      </Tr>
      <Tr as="link" href="#">
        <Td>Some title</Td>
        <Td>Some date</Td>
        <Td>Some date</Td>
        <Td>Some category</Td>
      </Tr>
      <Tr as="link" href="#">
        <Td>Some title</Td>
        <Td>Some date</Td>
        <Td>Some date</Td>
        <Td>Some category</Td>
      </Tr>
    </TBody>
    <TFoot>some footer</TFoot>
  </Table>
);
