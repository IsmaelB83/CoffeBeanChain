// Actions to interact with the state
const actions = {
    init: "INIT",
};

// Initial state
const initialState = {
    artifact: null,
    web3: null,
    accounts: null,
    networkId: null,
    contract: null
};

// Reducers
const reducer = (state, action) => {
    const { type, data } = action;
    switch (type) {
        // Connected to metamask
        case actions.init:
            const newState = {
                artifact: data.artifact,
                web3: data.web3,
                accounts: data.accounts,
                networkId: data.networkId,
                contract: data.contract,
            }
            return { ...state, ...newState };
        default:
            throw new Error("Undefined reducer action type");
    }
};

// Export
export {
    actions,
    initialState,
    reducer
};
