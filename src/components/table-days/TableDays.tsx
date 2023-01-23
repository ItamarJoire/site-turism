import { Table, TableBody, TableCell, TableContainer, TableRow, Box } from '@mui/material'

function createData(day: string, hour: string) {
  return { day, hour };
}

const rows = [
  createData('Segunda', '10:00 - 18:00'),
  createData('Terça-feira', '10:00 - 18:00'),
  createData('Quarta-feira', '10:00 - 18:00'),
  createData('Quinta-feira', '10:00 - 18:00'),
  createData('Sexta-feira', '10:00 - 18:00'),
  createData('Sábado', '10:00 - 18:00'),
  createData('Domingo', '10:00 - 18:00'),
];

export function TableDays() {
  return (
    <TableContainer
      component={Box}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        my: 4,
      }}
    >
      <Table sx={{ minWidth: 320, maxWidth: 700 }} aria-label="simple table" >
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.day}>
              <TableCell align="left">{row.day}</TableCell>
              <TableCell align="right">{row.hour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}