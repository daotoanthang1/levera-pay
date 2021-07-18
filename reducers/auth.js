import produce from 'immer'

const initState = { init: false }

const auth = produce((draf, action) => {
  switch (action.type) {
    case 'auth.user': 
      draf.user = action.payload
  }
}, initState)

export default auth;