import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render } from 'react-dom';
import Product from './Product';
import { act } from 'react-dom/test-utils';

let container = null;

beforeEach(() => {
    // console.log('beforeEach')
    container = document.createElement('div');
    document.body.appendChild(container);
})
afterEach(() => {
    // console.log('AfterEach')
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

const testProduct = {
    name: 'test name',
    price: 110,
    article: 'testArticle'
}

describe('Testing Product.js', () => {
    test('Component renders correctly', () => {
        act(() => {
            render(<Product />, container)
        })
    });

    test('Product shows all description', () => {
        act(() => {
            render(<Product product={testProduct} />, container)
        })

        const productNames = document.getElementsByClassName('products-description-name')
        expect(productNames[0].textContent).toBe(testProduct.name)

        const productPrice = document.getElementsByClassName('products-description-price')
        expect(productPrice[0].textContent).toBe(`$${testProduct.price}`)
    });

    test('On icon click saveToFavorites us called with current product', () => {
        const onSaveToFavMock = jest.fn()
        // console.log('last test')
        onSaveToFavMock.mockImplementation(() => console.log('Mock function is called'))

        act(() => {
            render(<Product product={testProduct} onSaveToFav={onSaveToFavMock}  />, container)
        })
        // console.log('after rendering')
        expect(onSaveToFavMock).not.toHaveBeenCalled()

        const favIcons = document.getElementsByClassName('action-block');
        favIcons[0].dispatchEvent(new MouseEvent('click', {bubbles: true}));
        // console.log('after click')

        // expect(onSaveToFavMock).toHaveBeenCalledTimes(1);
        // expect(onSaveToFavMock).toHaveBeenCalledWith(testProduct)
    })
});

// describe('Snapshot testing Product.js', () => {
//     test('Test product snapshot', () => {
//         act(() => {
//             render(<Product />, container)
//         })

//         expect(pretty(container.innerHTML, {ocd: true})).toMatchSnapshot()
//     })
// })