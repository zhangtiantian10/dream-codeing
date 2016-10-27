import React from 'react';
import Nav from '../containers/Nav';

export default class Person extends React.Component {
    componentDidMount() {
        this.props.changeNav();
    }
    render() {
        return <div>
            <Nav/>
            <div className="paddingBottomList">
                <div className="col-lg-offset-1 col-lg-2 divPaddingTop">
                    <ul className="nav nav-pills nav-stacked" role="tablist">
                        <li role="presentation" className="active"><a href="#" className="aClickColor">我的接单<span className="glyphicon glyphicon-chevron-right pull-right"></span><span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                        <li role="presentation"><a href="#" className="aColor">我的发单<span className="glyphicon glyphicon-chevron-right pull-right"></span><span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                        <li role="presentation"><a href="#" className="aColor">修改密码<span className="glyphicon glyphicon-chevron-right pull-right"></span><span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                    </ul>
                </div>
                <div className="col-lg-offset-1 col-lg-6">
                    <div>
                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            <li role="presentation" className="active"><a href="#" className="aFontColorTwo active">正在进行</a></li>
                            <li role="presentation"><a href="#" className="aFontColorTwo">已完成</a></li>
                        </ul>
                    </div>
                    <div className="hidden">
                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            <li role="presentation" className="active"><a href="#" className="aFontColorTwo active">被接</a></li>
                            <li role="presentation"><a href="#" className="aFontColorTwo">未被接</a></li>
                            <li role="presentation"><a href="#" className="aFontColorTwo">已完成</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>;
    }
}