import React from 'react';
import Nav from '../containers/Nav';
import Footer from '../containers/footer';

export default class Login extends React.Component {
    render() {
        return <div>
            <Nav/>
            <div className="backImage1 orderPaddingBottom">
                <br/>
                <br/>
                <div className="col-lg-offset-8 loginBack">
                        {/*<ul className="nav nav-justified" role="tablist">*/}
                            {/*<li><a href="#" className="aa"><span className="colorA action">登陆</span></a></li>*/}
                            {/*<li><a href="#" className="aa"><span className="colorA">注册</span></a></li>*/}
                        {/*</ul>*/}
                    {this.props.children}
                </div>
            </div>
            <Footer/>
        </div>
    }
}