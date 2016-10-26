import React from 'react';
import Nav from  '../containers/Nav';
import Footer from  '../containers/footer';

export default class orderList extends React.Component {
    render() {
        return <div>
            <Nav/>
            <div className="page">
                <div className="part">
                    <h4 className="text-left">标题：取快递</h4>
                    <h4 className="text-left">时间：2016-10-23</h4>
                    <h4 className="text-left">地点：东区天桥底下</h4>
                    <h4 className="text-left">价格：3元</h4>
                    <div className="text-right">
                        <button type="button" className="btn btn-primary btn-sm">确认接单</button>
                        <button type="button" className="btn btn-primary btn-sm">联系买家</button>
                    </div>
                </div>

                <div className="part">
                    <h4 className="text-left">标题：买饭</h4>
                    <h4 className="text-left">时间：2016-10-27</h4>
                    <h4 className="text-left">地点：西区饭堂</h4>
                    <h4 className="text-left">价格：3元</h4>
                    <div className="text-right">
                        <button type="button" className="btn btn-primary btn-sm">确认接单</button>
                        <button type="button" className="btn btn-primary btn-sm">联系买家</button>
                    </div>
                </div>

                <div className="part">
                    <h4 className="text-left">标题：复习</h4>
                    <h4 className="text-left">时间：2016-11-28</h4>
                    <h4 className="text-left">地点：东区衣服教学楼八楼自习室复习数电</h4>
                    <h4 className="text-left">价格：10元</h4>
                    <div className="text-right">
                        <button type="button" className="btn btn-primary btn-sm">确认接单</button>
                        <button type="button" className="btn btn-primary btn-sm">联系买家</button>
                    </div>
                </div>

                <div className="part">
                    <h4 className="text-left">标题：看电影</h4>
                    <h4 className="text-left">时间：2016-11-2</h4>
                    <h4 className="text-left">地点：奥堡国际电影厅</h4>
                    <h4 className="text-left">价格：1元</h4>
                    <div className="text-right">
                        <button type="button" className="btn btn-primary btn-sm">确认接单</button>
                        <button type="button" className="btn btn-primary btn-sm">联系买家</button>
                    </div>
                </div>
            </div>
            <div  className="footer">
                <Footer/>
            </div>


        </div>;

    }
}