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
        mt: 6,
        mb: 4,
        border: 1,
        borderColor: '#E0E0E0',
        borderRadius: 1,
      }}
    >
      <Table sx={{ minWidth: 320, maxWidth: 700 }} aria-label="simple table" >
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.day}>
              <TableCell align="left" sx={{ fontWeight: 600 }}>{row.day}</TableCell>
              <TableCell align="right" sx={{ fontWeight: 500 }}>{row.hour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}