import React from 'react';
import Nav from '../containers/Nav';
import Footer from '../containers/footer';

export default class OnlineOrders extends React.Component {
    componentDidMount() {
        this.props.changeNav();
    }

    render() {
        return <div>
            <Nav/>
            <div className="backImage orderPaddingBottom">
                <div className="col-md-offset-4 col-md-8">
                    <p className="msg">在线下单</p>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-2 item">
                        <span className="aaa">*标题：</span>
                    </div>
                    <div className="col-md-7">
                        <div className="input-group input-group-md">
                            <input type="text" className="form-control" placeholder="输入标题"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-2 item">
                        <span className="aaa">*目的地：</span>
                    </div>
                    <div className="col-md-7">
                        <div className="input-group input-group-md">
                            <input type="text" className="form-control" placeholder="你的目的地在哪"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-2 item">
                        <span className="aaa">*佣金：</span>
                    </div>
                    <div className="col-md-7">
                        <div className="input-group input-group-md">
                            <input type="text" className="form-control" placeholder="不包含物品本身价格，最低2元"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-2 item">
                        <span className="aaa">*性别限制：</span>
                    </div>
                    <div className="col-md-1">
                        <input type="radio"/>
                        <label className="aaa">不限</label>
                    </div>
                    <div className="col-md-1">
                        <input type="radio"/>
                        <label className="aaa">限女性</label>
                    </div>
                    <div className="col-md-1">
                        <input type="radio"/>
                        <label className="aaa">限男性</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-2 item">
                        <span className="aaa">*联系方式：</span>
                    </div>
                    <div className="col-md-7">
                        <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">手机号</button>
                        </span>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 col-md-offset-5 item-input">
                        <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">QQ号</button>
                        </span>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 col-md-offset-5 item-input">
                        <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">微信号</button>
                        </span>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-2 item">
                        <span className="aaa">*详细描述：</span>
                    </div>
                    <div className="col-md-7">
                        <div className="input-group input-group-md">
                            <textarea    className="form-control " placeholder="你对订单的详细要求，没有可不填，不超过200字"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-2 item">
                        <span className="aaa">*标签：</span>
                    </div>
                    <div className="col-md-3  item-select">
                        <select className="form-control">
                            <option>跑腿</option>
                            <option>学习</option>
                            <option>其他</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-5 col-md-3 item-botton">
                        <div className="btn-group btn-group-justified">
                            <div className="btn-group">
                                <button type="button" className="btn btn-info">提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}