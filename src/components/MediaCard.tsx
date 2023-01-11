import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'


interface IMediaCard {
  title: string
  image: string
  description: string
}

export const MediaCard = (props: IMediaCard) => {

  return (
    <Card
      variant='outlined' 
      sx={{ maxWidth: 345, m: 4 }}
    >
      <CardMedia
        sx={{ height: 170 }}
        image={props.image}
        title={props.title}
      />
      <Box sx={{ p: 1}} >
        <CardContent>
          <Typography 
            component="div" 
            variant="h5" 
            gutterBottom  
          >
            {props.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            // whiteSpace='nowrap'
            // overflow='hidden'
            // textOverflow='ellipsis'
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
          <Button 
            variant='contained' 
            size="small"
            href='https://google.com.br' 
            target='_blank' 
            >
              Mais informações
            </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

