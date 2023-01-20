function customStore(params) {
    let state;

    function getState(params) {
        return state;
    }

    return {
        getState
    };

}

export default customStore();