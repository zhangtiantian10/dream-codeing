import React from 'react';
import Nav from '../containers/Nav';
import Footer from '../containers/footer';

export default class Home extends React.Component {
    componentDidMount() {
        this.props.changeNav();
    }
    render() {
        return <div>
            <Nav/>
            <div className="col-lg-offset-1 col-lg-10">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="../../images/1.jpg" alt=""/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../images/2.jpg" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../images/3.jpg" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../images/4.jpg" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button"
                       data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button"
                       data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-lg-offset-1 col-lg-10">
                <img src="../../images/8.jpg" width="100%" alt=""/>
            </div>
            <div className="col-lg-offset-1 col-lg-10 lunPadding">
                <img src="../../images/5.jpg" width="50%" alt=""/>
                <img src="../../images/5.jpg" width="50%" alt=""/>
                <img src="../../images/9.jpg" width="50%" alt=""/>
                <img src="../../images/9.jpg" width="50%" alt=""/>
            </div>
            <div className="">
                <Footer/>
            </div>
        </div>
    }
}