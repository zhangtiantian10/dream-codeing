import React from 'react';

export default class Sign extends React.Component {
    render() {
        return <div>
            <ul className="nav nav-justified" role="tablist">
                <li><a href="/login"><span className="colorA">登陆</span></a></li>
                <li><a href="/sign" className="backColor"><span className="colorA action">注册</span></a></li>
            </ul>
            <hr className="hrMargeTop"/>
            <form className="form-horizontal" role="form">
                <div className="form-group">
                    <label for="inputEmail3" className="col-lg-offset-1 col-lg-3 control-label">用户名</label>
                    <div className="col-lg-7">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="用户名"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-lg-offset-1 col-lg-3 control-label">手机号</label>
                    <div className="col-lg-7">
                        <input type="text" className="form-control" id="inputEmail2" placeholder="手机号"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputPassword3" className="col-lg-offset-1 col-lg-3 control-label">密码</label>
                    <div className="col-lg-7">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="密码"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-offset-1 col-lg-3 control-label">确认密码</label>
                    <div className="col-lg-7">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="确认密码"/>
                    </div>
                </div>
                <div className="form-group formPaddingTop">
                    <div className="col-sm-offset-2 col-lg-8">
                        <button type="submit" className="btn btn-primary btn-block">注册</button>
                    </div>
                </div>
            </form>
        </div>
    }
}