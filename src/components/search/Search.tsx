import {Box, Grid, Toolbar, AppBar, useTheme, Icon, TextField, Button, MenuItem } from '@mui/material';
import Place from '@mui/icons-material/Place'

const locations = [
  {
    value: 'Itaparica',
  },
  {
    value: 'Cidade 2',
  },
  {
    value: 'Cidade 3',
  },
];

export const Search = () => {
  const theme = useTheme()

  return(
    <Box sx={{ py: theme.spacing(2)}}>
      <AppBar 
        position="static"
        color="default"
        elevation={0}
        sx={{ 
          borderRadius: 1,
          background: 'white', 
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
          // marginX:'auto', 
          // width: { xs: '90%', sm: '50%'},
          // display: { xs: 'none', md: 'flex' },
      >
        
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Place color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                select
                defaultValue='Itaparica'
                fullWidth
                placeholder="Escolha o tipo de comércio"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default'},
                }}
                variant="standard"
              >
                {locations.map((place) => (
                  <MenuItem key={place.value} value={place.value}>
                    {place.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <Button 
                size='large'
                variant="outlined" 
                sx={{ mr: 1, borderRadius: 36 }}
                startIcon={<Icon>search</Icon>}
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}