import {connect} from 'react-redux';
import Person from '../components/Person';

const mapDispatchToProps = (dispatch) => {
    return {
        changeNav: () => {
            dispatch({type: 'CHANGE_NAV', isActive: ''})
        }
    }
};

export default connect(() => {return{}},mapDispatchToProps)(Person);