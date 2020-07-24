import reducer from './productsReducer';
import Actions from '../../constants/constants';

const testProducts = [{
    "article": "QZ9392"
}, {
    "article": "QZ1892"
}]

describe('Testing productsReducer actions', () => {
    test('FETCH_PRODUCTS saves products in store', () => {
        const newState = reducer([], {type: Actions.FETCH_PRODUCTS, payload: testProducts})

        expect(newState).toBe(testProducts)
    })
})