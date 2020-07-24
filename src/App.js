import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './components/Loading/Loading';
import Products from './containers/Products/Products';
import Dialog from './components/Dialog/Dialog';
import Header from './containers/Header/Header';
import Cart from './containers/Cart/Cart';
import Favorites from './containers/Favorites/Favorites';
import { setCurrentProduct, setFavorites, setCart, setOpenModal, getProducts } from './store/actions/actions';

function App(props) {

  const { loading, getProducts,
        currentProduct, saveCurProd, openingModal, setOpeningModal,
        saveFavs, favorites, cart, saveToCart } = props;
  useEffect(() => {
    getProducts()
  }, [getProducts])

  const onClose = () => {
    setOpeningModal(false);
  };

  const onSubmit = (product) => {
    const newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    saveToCart(newCart);
    setOpeningModal(false);
  };
  
  const onSaveToFav = (newProduct) => {
    let newFavorites = [...favorites];
    const indexFav = newFavorites.indexOf(newProduct);

    if (indexFav !== -1) {
      newFavorites.splice(indexFav, 1);
    } else {
      newFavorites.push(newProduct);
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    saveFavs(newFavorites);
    saveCurProd(newProduct);
  };

  const dialog = (
    <Dialog
      header='Аdd product to cart?'
      onClose={onClose}
      onSubmit={() => onSubmit(currentProduct)}
      currentProduct={currentProduct}
    >
    </Dialog>
  );


  if (loading) {
    return <Loading />
  }
  if (openingModal) {
    return dialog
  }


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/react-simple-app' render={() => <Products onSaveToFav={onSaveToFav} />} />
        <Route exact path='/favorites' render={() => <Favorites onSaveToFav={onSaveToFav} />} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
  );

}

const mapStateToProps = (store) => {
  return {
    loading: store.loading,
    products: store.products,
    currentProduct: store.currentProduct,
    openingModal: store.openingModal,
    favorites: store.favorites,
    cart: store.cart.cartArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    saveCurProd: (product) => dispatch(setCurrentProduct(product)),
    saveFavs: (fav) => dispatch(setFavorites(fav)),
    saveToCart: (cartItem) => dispatch(setCart(cartItem)),
    setOpeningModal: (isOpen) => dispatch(setOpenModal(isOpen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);