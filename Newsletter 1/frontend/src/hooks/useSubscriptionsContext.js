import { SubscriptionContext } from "../context/SubscriptionContext";
import { useContext } from "react";

export const useSubscriptionsContext = () => {
  const context = useContext(SubscriptionContext);

  if (!context) {
    throw Error(
      "useSubscriptionsContext must be used inside a SubscriptionsContextProvider"
    );
  }

  return context;
};
