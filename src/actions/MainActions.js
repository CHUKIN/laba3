// import {GET_PHOTOS_REQUEST,
//   GET_PHOTOS_SUCCESS, SET_MARK, SET_MODEL, SET_YEAR, SET_COST, SET_VALUTA, SET_TRANSMISSION, SET_TYPE, SET_MILEAGE, SET_AMOUNT, CLEAR } from '../constants/Search'

// export function setMark(event,data) {
//   return {
//     type: SET_MARK,
//     mark: data.value
//   }
// }




export function getPhotoss() {

  return (dispatch) => {
    dispatch({
      type: "GET_PHOTOS_REQUEST",
      year: 1999
    })

    setTimeout(() => {
      dispatch({
        type: "GET_PHOTOS_SUCCESS",
        photos: [1,2,3,4,5]
      })
    }, 1000)
  }
}