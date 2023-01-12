export {}
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { MediaCard } from "../media-card/MediaCard";
// import { Box, Grid, Typography } from '@mui/material'

// import LeftArrow from "../../assets/left-arrow.svg"
// import RightArrow from "../../assets/right-arrow.svg"

// const infoRestaurant = [
//   {
//     id: 1,
//     title: 'Restaurante Ponto Certo',
//     description: 'Localizada loremsdasdasdsssss',
//     image: 'https://source.unsplash.com/random'
//   },
//   {
//     id: 2,
//     title: 'Titulo2',
//     description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random'
//   },
//   {
//     id: 3,
//     title: 'Titulo3',
//     description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random'
//   },
//   {
//     id: 4,
//     title: 'Titulo4',
//     description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random'
//   },
//   {
//     id: 5,
//     title: 'Titulo5',
//     description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random'
//   },
// ]


// export const SimpleSlider = () => {
//   const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
//     <img src={LeftArrow} alt="prevArrow" {...props} />
//   );

//   const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
//     <img src={RightArrow} alt="nextArrow" {...props} />
//   );

//   const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       initialSlide: 0,
//       prevArrow: <SlickArrowLeft />,
//       nextArrow: <SlickArrowRight />

//       // nextArrow: <SampleNextArrow />,
//       // prevArrow: <SamplePrevArrow />,
//       // responsive: [
//       //   {
//       //     breakpoint: 900,
//       //     settings: {
//       //       slidesToShow: 3,
//       //       slidesToScroll: 3,
//       //       infinite: true,
//       //       dots: false
//       //     }
//       //   },
//       //   {
//       //     breakpoint: 600,
//       //     settings: {
//       //       slidesToShow: 2,
//       //       slidesToScroll: 2,
//       //       initialSlide: 2
//       //     }
//       //   },
//       //   {
//       //     breakpoint: 480,
//       //     settings: {
//       //       slidesToShow: 1,
//       //       slidesToScroll: 1
//       //     }
//       //   }
//       // ]
//   }

//   return (
//     <Box>
//       <Grid>
//         <Typography 
//           variant="h5"
//           fontWeight='500'
//           color='text.secondary'
//         >
//           Restaurantes
//         </Typography>
//         <Slider {...settings}>
//           {infoRestaurant.map((restaurant) => (
//             <MediaCard
//               key={restaurant.id} 
//               title={restaurant.title}
//               description={restaurant.description}
//               image={restaurant.image}
//             />
//           ))}
//         </Slider>
//       </Grid>
//     </Box>
//   );
// }
