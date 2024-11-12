import { createContext, useReducer } from "react";

export const SubscriptionContext = createContext();
 
export const subscriptionReducer = (state, action) => {
    switch (action.type) {
      case "SET_SUBSCRIPTIONS":
        return { subscriptions: action.payload};
      case "CREATE_SUBSCRIPTION":
        return { subscriptions: [action.payload, ...state.subscriptions] };
      case "DELETE_SUBSCRIPTION":
        return {
          subscriptions: state.subscriptions? state.subscriptions.filter((w) => w._id !== action.payload._id): [],
        };
      default:
        return state;
    }
}

export const SubscriptionsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(subscriptionReducer, {
      subscriptions: [null],
    });
    return (
      <SubscriptionContext.Provider value={{ ...state, dispatch }}>
        {children}
      </SubscriptionContext.Provider>
    );
}