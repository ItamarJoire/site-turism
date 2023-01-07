import { Box, Paper, TextField, useTheme, Button, InputAdornment, Icon, Typography, MenuItem, useMediaQuery} from '@mui/material'

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

export const SearchMain = () => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box 
      sx={{ 
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', 
        width: '100%', 
        mt: '-240px'
      }}
    >    
      <Box 
        component={Paper}
        sx={{
          width:'50%',
          backgroundColor: '#f5f4f3',
          display: 'flex',

          flexDirection: !smDown ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        padding={2} 
       
      >
        
      <TextField 
        select
        sx={{height: '56px', mr: theme.spacing(2), width: '100%'}}
        defaultValue='Itaparica'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Icon>room</Icon>
            </InputAdornment>
          )
        }}
      >
        {locations.map((place) => (
          <MenuItem key={place.value} value={place.value}>
            {place.value}
          </MenuItem>
        ))}
      </TextField>

        <Box>
          <Button 
            sx={{height: '56px', borderRadius: '36px'}}
            size='large' 
            variant='contained'
            startIcon={<Icon>search</Icon>} 
            disableElevation
          >
          <Typography
          >
            Buscar
          </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}