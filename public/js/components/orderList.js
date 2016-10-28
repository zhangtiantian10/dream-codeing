import React from 'react';
import Nav from  '../containers/Nav';
import Footer from  '../containers/footer';

export default class orderList extends React.Component {
    componentDidMount() {
        this.props.changeNav();
    }
    render() {
        return <div>
            <Nav/>
            <div className="backImage2">
            </div>
            <div className="backImage3">
            </div>
            <div  className="footer">
                <Footer/>
            </div>

        </div>;

    }
}