import {connect} from 'react-redux';
import OnlineOrders from '../components/online-Orders.js';

const mapDispatchToProps = (dispatch) => {
    return {
        changeNav: () => {
            dispatch({type: 'CHANGE_NAV', isActive: 'order'})
        }
    }
};

export default connect(() => {return {}}, mapDispatchToProps)(OnlineOrders);