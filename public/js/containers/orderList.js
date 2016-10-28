import {connect} from 'react-redux';
import orderList from '../components/orderList.js';
const mapDispatchToProps = (dispatch) => {
    return {
        changeNav: () => {
            dispatch({type: 'CHANGE_NAV', isActive: 'all'})
        }
    }
};
export default connect(() => {return {}}, mapDispatchToProps)(orderList);