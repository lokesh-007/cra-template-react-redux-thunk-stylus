import React from 'react';
import { connect } from 'react-redux';

import { ExampleActions } from '../../actions';

import './ExamplePage.styl';

class ExamplePage extends React.Component {
    componentDidMount() {
        const {
            exampleActionWithThunk,
        } = this.props;

        exampleActionWithThunk();
    }

    render() {
        const {
            example,
        } = this.props;

        console.log(example);

        return (
            <div className="example-page-wrapper">
                <h1>
                    Hello,
                </h1>
                <h2>
                    This is a template for Create React App which sets up react with redux and thunk, with stylus as css preprocessor.
                </h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
       example,
    } = state.exampleReducer;

    return {
        example,
    };
};

const mapDispatchToProps = (dispatch) => {
    const {
        exampleActionWithThunk,
    } = ExampleActions;

    return {
        exampleActionWithThunk: () => dispatch(exampleActionWithThunk()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExamplePage);