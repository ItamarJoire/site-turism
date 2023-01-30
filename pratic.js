const obj1 = {
    "locations": [
      {
        "name": "Itaparica",
        "restaurants": [
          {
            "id": 1,
            "Title": "Restaurante (Itaparica)"
          },
          {
            "id": 1,
            "Title": "Restaurante (Itaparica)"
          }
        ]
      },
      {
        "name": "Cidade 2",
        "restaurants": [
          {
            "id": 1,
            "Title": "Restaurante (Cidade 2)"
          },
          {
            "id": 1,
            "Title": "Restaurante (Ciadade 2)"
          }
        ]
      }
    ],  
}
  
console.log(obj1.locations.map(item => {
  return <div>
    {item.restaurants.map(item => {
      return <div>{item.Title}</div>
    })}
  </div>
}))