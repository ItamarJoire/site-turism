import {
  useTheme,
  Box,
  AppBar,
  Toolbar,
  Grid,
  TextField,
  MenuItem,
  Button,
  Icon
} from '@mui/material';

import { useEffect, useState } from 'react'

import { useLocation } from '../../hooks/useLocation';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import axios from 'axios'

const locations = [
  {
    location: 'Itaparica',
    restaurant: [
      {
        id: 1,
        title: 'Porto Canoas nas Cataratas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/1"
      },
      {
        id: 2,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 3,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 4,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
    ],
    commerce: [
      {
        id: 1,
        title: 'Porto Canoas nas Cataratas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/1"
      },
      {
        id: 2,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 3,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 4,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
    ],
  },
  {
    location: 'Cidade 2',
    restaurant: [
      {
        id: 1,
        title: 'Rest da cidade 2',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/1"
      },
      {
        id: 2,
        title: 'Rest da cidade 2',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 3,
        title: 'Rest da cidade 2',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 4,
        title: 'Rest da cidade 2',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
    ],
    commerce: [
      {
        id: 1,
        title: 'Porto Canoas nas Cataratas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/1"
      },
      {
        id: 2,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 3,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
      {
        id: 4,
        title: 'Porto Canoas',
        description: 'Lorem Ipsum ',
        image: "https://source.unsplash.com/random/?restaurant/2"
      },
    ],
  }
]

interface IProps {
  id: number
  title: string
  author: string
}

interface IPropsArray {
  location: string
  restaurants: IProps[]
  commerces: IProps[]
}

export function Search() {
  // const { local, setLocal } = useLocation()
  const theme = useTheme()
  const [dataLocal, setDataLocal] = useState<IPropsArray>()
  const url = 'http://localhost:3001/locations'

  async function loadData() {
    await axios.get(url)
      .then(response => setDataLocal(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    loadData()
  }, [])

  console.log(dataLocal)

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const result = data.get('option')

    const newArray = locations.filter((item) => {
      return item.location === result
    })

    console.log('NewArray => ', newArray)
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