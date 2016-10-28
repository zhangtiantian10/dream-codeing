import React from 'react';

export default class Log extends React.Component {
    render() {
        return <div>
            <ul className="nav nav-justified" role="tablist">
                <li><a href="/login" className="backColor"><span className="colorA action">登陆</span></a></li>
                <li><a href="/sign" className=""><span className="colorA">注册</span></a></li>
            </ul>
            <hr className="hrMargeTop"/>
            <form className="form-horizontal formPaddingTop" role="form">
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-8">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="请输入用户名或手机号"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-8">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="请输入密码"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-offset-6">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> 下次自动登陆
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-lg-8">
                        <button type="submit" className="btn btn-primary btn-block">登陆</button>
                    </div>
                </div>
            </form>
        </div>
    }
}