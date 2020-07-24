import Actions from '../../constants/constants';
import reducer from './cartReducer';

const cartArray = [{
    "article": "QZ9392"
}, {
    "article": "QZ1892"
}]

describe('Testing cartReducer actions', () => {
    test('SET_CART saves cart products in store', () => {
        // const newState = reducer([], {type: Actions.SET_CART, payload: cartArray[1]})

        // const expectedTestCart = {...cartArray}
        // expectedTestCart[1].isInCart = true

        // console.log(newState);
        // console.log(expectedTestCart)

        // expect(newState).toEqual(expectedTestCart);
        // // expect(newState[1].isInCart).toBeTruthy();
    })
})