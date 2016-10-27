import {connect} from 'react-redux';
import Home from '../components/Home';

const mapDispatchToProps = (dispatch) => {
    return {
        changeNav: () => {
            dispatch({type: 'CHANGE_NAV', isActive: 'home'})
        }
    }
};

export default connect(() => {return {}}, mapDispatchToProps)(Home);