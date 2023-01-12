import { Box, Grid, Toolbar, AppBar, useTheme, Icon, TextField, MenuItem, Button } from '@mui/material';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const locations = [
  {
    value: 'Itaparica',
    commerce: {
      name: 'Bar 1',
      local: 'Rua 1.1'
    },
    roost: {
      name: 'Pousada 1',
      local: 'Rua 1.2'
    }
  },
  {
    value: 'Cidade 2',
    commerce: {
      name: 'Bar 2',
      local: 'Rua 2.1'
    },
    roost: {
      name: 'Pousada 2',
      local: 'Rua 2.2'
    }
  },
];

export function Search() {
  const theme = useTheme()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = data.get('option')

    const newArray = locations.filter((item) => {
      return item.value === result
    })

    console.log(newArray)
  }

  return (
    <Box sx={{ py: theme.spacing(4), pb: theme.spacing(6) }} >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          padding: theme.spacing(1),
          borderRadius: 2,
          background: 'white',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          maxWidth: '600px'
        }}
      >

        <Toolbar >
          <Grid
            component='form'
            onSubmit={handleSearch}
            container
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <LocationOnOutlinedIcon sx={{ color: '#58585F', display: 'block' }} />
            </Grid>

            <Grid item xs>
              <TextField
                variant="standard"
                name='option'
                select
                defaultValue='Itaparica'
                fullWidth
                placeholder="Escolha o tipo de comércio"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default', color: '#58585F' },
                }}
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
                variant="contained"
                type='submit'
                size='medium'
                disableElevation
                startIcon={<Icon>search</Icon>}
                sx={{ mr: 1, borderRadius: 36 }}
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