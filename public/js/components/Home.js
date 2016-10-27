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
            <div className="col-lg-offset-2 col-lg-8">
                <h2 className="center colorList paddingBottomSpan">使用步骤</h2>
                <img src="../../images/16.jpg" className="paddingBottomSpan" width="100%" alt=""/>
            </div>
            <div className="col-lg-offset-1 col-lg-10 lunPadding paddingBottomSpan">
                <h2 className="center colorList">他们都在使用私人订制</h2>
                <div className="col-lg-6 paddingBottomSpan">
                    <div className="col-lg-3">
                        <img src="../../images/11.jpg" width="100px" alt=""/>
                    </div>
                    <div className="col-lg-9 paddingBottomSpan">
                        <span className="colorList">  我是一名大三的学生，我们课很多，有时候快递来了没办法取，这时候就需要一个人帮我取快递</span>
                    </div>
                </div>
                <div className="col-lg-6 paddingBottomSpan">
                    <div className="col-lg-3">
                        <img src="../../images/11.jpg" width="100px" alt=""/>
                    </div>
                    <div className="col-lg-9 paddingBottomSpan">
                        <span className="colorList">  我是一名大三的学生，我们课很多，有时候快递来了没办法取，这时候就需要一个人帮我取快递</span>
                    </div>
                </div>
                <div className="col-lg-6 paddingBottomSpan">
                    <div className="col-lg-3">
                        <img src="../../images/13.jpg" width="100px" alt=""/>
                    </div>
                    <div className="col-lg-9 paddingBottomSpan">
                        <span className="colorList">  我是一名大三的学生，我们课很多，有时候快递来了没办法取，这时候就需要一个人帮我取快递</span>
                    </div>
                </div>
                <div className=" col-lg-6 paddingBottomSpan">
                    <div className="col-lg-3">
                        <img src="../../images/13.jpg" width="100px" alt=""/>
                    </div>
                    <div className="col-lg-9 paddingBottomSpan">
                        <span className="colorList">  我是一名大三的学生，我们课很多，有时候快递来了没办法取，这时候就需要一个人帮我取快递</span>
                    </div>
                </div>
            </div>
            <div className="">
                <Footer/>
            </div>
        </div>
    }
}