import React from 'react';
import { act } from "react-dom/test-utils"
import { render, unmountComponentAtNode } from 'react-dom';
import Products from './Products';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

const testProducts = [{
    price: 110,
    article: 'testArticle 1'
}, {
    price: 220,
    article: 'testArticle 2'
}]

describe('Testing products', () => {
    test('Products are rendered succesfully', () => {
        // act(() => {
        //     render(<Products />, container)
        // })
    })
})