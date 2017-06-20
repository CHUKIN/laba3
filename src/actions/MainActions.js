import {GET_POPULAR_CARS_SUCCESS,GET_POPULAR_CARS_REQUEST,SET_CAR,GET_CAR ,SET_MARK,SET_MODEL, SET_YEAR, SET_COST,  SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT} from '../constants/Main'

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
         mileage:data.mileage
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

export function changeCar(id) {

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