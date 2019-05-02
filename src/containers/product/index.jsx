import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/common/loading';
import { bindActionCreators } from 'redux';
import * as productAction from '../../redux/product/actions';

class ProduceContainer extends Component {

    componentDidMount(){
        this.props.productAction.loadProducts();
    }


    render() {
        console.log(this.props);
        return (
            <h1>Hello Products</h1>
        );
    }

}

const mapStateToProps = (state) => ({ products: state.product });

const mapDispatchToProps = (dispatch) => ({
    productAction: bindActionCreators(productAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ProduceContainer);