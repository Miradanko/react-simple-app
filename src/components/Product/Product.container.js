import { connect } from "react-redux";
import Product from './Product';
import { setOpenModal, setCurrentProduct } from '../../store/actions/actions';

const mapStateToProps = store => {
    return {
        opModal: store.openingModal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openingModal: (isOpen) => dispatch(setOpenModal(isOpen)),
        saveCurProd: (product) => dispatch(setCurrentProduct(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);