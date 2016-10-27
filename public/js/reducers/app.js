module.exports = (state = {viewFlag: '', isActive: ''}, action) => {
    switch (action.type) {
        case "CHANGE_VIEW":
            return {
                viewFlag: action.text,
                isActive: state.isActive
            };
        case "CHANGE_NAV":
            return {
                viewFlag: state.viewFlag,
                isActive: action.isActive
            };
        default:
            return state;
    }
};