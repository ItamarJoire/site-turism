import {Box, Grid, Toolbar, AppBar, useTheme, Icon, TextField, MenuItem } from '@mui/material';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { ButtonGradientColor } from '../../global-style';

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
    <Box sx={{ py: theme.spacing(4), pb: theme.spacing(6)}}>
      <AppBar 
        position="static"
        color="default"
        elevation={0}
        sx={{ 
          padding: theme.spacing(1),
          borderRadius: 2,
          background: 'white', 
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)', 
          maxWidth: '800px'
        }}
          // display: { xs: 'none', md: 'flex' },
      >
        
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <LocationOnOutlinedIcon color="inherit" sx={{ display: 'block' }} />
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
              <ButtonGradientColor 
                size='large'
                variant="contained" 
                sx={{ mr: 1, borderRadius: 36 }}
                startIcon={<Icon>search</Icon>}
              >
                Buscar
              </ButtonGradientColor>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}