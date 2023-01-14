import { Box, Grid, Toolbar, AppBar, useTheme, Icon, TextField, MenuItem, Button } from '@mui/material';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const locations = [
  {
    location: 'Itaparica',
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
    location: 'Cidade 2',
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

const locations2 = [
  {
    location: 'Itaparica',
    restaurant: [
      {
        id: 1,
        title: 'Porto Canoas nas Cataratas',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini',
        image: "https://source.unsplash.com/random/?restaurant/1"
      },
      {
        id: 2,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },


    ]
  }
];

export function Search() {
  const theme = useTheme()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = data.get('option')

    const newArray = locations2.filter((item) => {
      return item.location === result
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
                {locations2.map((place) => (
                  <MenuItem key={place.location} value={place.location}>
                    {place.location}
                  </MenuItem>
                ))}

              </TextField>
            </Grid>

            <Grid item>
              <Button
                sx={{ textTransform: 'capitalize', mr: 1, borderRadius: 36 }}
                variant="contained"
                type='submit'
                size='medium'
                disableElevation
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