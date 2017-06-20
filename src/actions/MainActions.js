import {GET_POPULAR_CARS_SUCCESS,GET_POPULAR_CARS_REQUEST,SET_CAR,GET_CAR ,SET_MARK,SET_MODEL, SET_YEAR, SET_COST,  SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT,SET_PHOTO} from '../constants/Main'

export function setCar(car) {
  return {
    type: SET_CAR,
    car: car
  }
}

export function setMark(event,data) {
  return {
    type: SET_MARK,
    mark: data.value
  }
}

export function setModel(event,data) {
  return {
    type: SET_MODEL,
    model: data.value
  }
}

export function setYear(event,newValue) {
  return {
    type: SET_YEAR,
    year: newValue
  }
}

export function setCost(event,newValue) {
  return {
    type: SET_COST,
    cost: newValue
  }
}


export function setTransmission(event,data) {
  return {
    type: SET_TRANSMISSION,
   transmission : data.checked?"Автоматика":"Ручное"
  }
}

export function setType(event,data) {
  return {
    type: SET_TYPE,
    enginesType: data.value
  }
}

export function setAmount(event,data) {
  return {
    type: SET_AMOUNT,
    amount: data.value
  }
}

export function setMileage(event,data) {
  return {
    type: SET_MILEAGE,
    mileage: data.value
  }
}

export function setPhoto(data) {

  return {
    type: SET_PHOTO,
    photo: data.target.src
  }
}



export function getPopularCars() {

  return (dispatch) => {
    dispatch({
      type: GET_POPULAR_CARS_REQUEST,
    })


      fetch('http://localhost:3000/api/mostpopularcars')
  .then(function(response) {
    //console.log(response);
    return response.json();
   })
  .then(function(data) {
    //console.log(data);
    dispatch({
         type: GET_POPULAR_CARS_SUCCESS,
         cars: data
       })
  })
  }
}





export function getCar(id) {

  return (dispatch) => {
      fetch('http://localhost:3000/api/car?id='+id)
  .then(function(response) {
    //console.log(response);
    return response.json();
   })
  .then(function(data) {
    //console.log(data);
    dispatch({
         type: GET_CAR,
         car: data,
         mark:data.mark,
         model:data.model,
         year: data.year,
         cost:data.cost,
         transmission:data.transmission,
         enginesType:data.enginesType,
         amount:data.amount,
         mileage:data.mileage,
         photo:data.photo,
         watch:data.watch
       })
  })
  }
}

export function deleteCar(id) {

  return (dispatch) => {
      fetch('http://localhost:3000/api/deletecar?id='+id)
  .then(function(response) {
    //console.log(response);

   })
  .then(function(data) {
    //console.log(data);

  })
  }
}

export function changeCar(car) {

  //console.log(car);

  return (dispatch) => {
      fetch(`http://localhost:3000/api/changecar?id=${car.id}&mark=${car.mark}&model=${car.model}&year=${car.year}&cost=${car.cost}&watch=${car.watch}&mileage=${car.mileage}&amount=${car.amount}&transmission=${car.transmission}&enginesType=${car.enginesType}`,{  
    method: 'post',  
    headers: {  
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    },  
    body: `photo=${car.photo}` 
  })
  .then(function(response) {
    //console.log(response);

   })
  .then(function(data) {
    //console.log(data);

  })
  }
}

export function addCar() {

  return (dispatch) => {
      fetch('http://localhost:3000/api/addcar')
  .then(function(response) {
    //console.log(response);

   })
  .then(function(data) {
    //console.log(data);

  })
  }
}