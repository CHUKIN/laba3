import {GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS, SET_MARK, SET_MODEL, SET_YEAR, SET_COST, SET_VALUTA, SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT, CLEAR } from '../constants/Search'

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

export function setValuta(event,data) {
  return {
    type: SET_VALUTA,
    valuta: data.value
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

export function setClear() {
  return {
    type: CLEAR,
    mark:"",
    model:"",
    cost:0,
    year:1950,
    amount:0,
    mileage:0,
    enginesType:"",
    transmission:"",
    valuta:""
  }
}


export function getPhotos() {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      year: 1999
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        photos: [1,2,3,4,5]
      })
    }, 1000)

  
  }
}