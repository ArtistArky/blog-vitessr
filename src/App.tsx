import React, { useEffect } from "react";
import { SubDomainRoutes, MainRoute } from "routers/index";
import Plausible from "plausible-tracker";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {

  useEffect(() => {

    const { enableAutoPageviews } = Plausible({
      domain: window.location.hostname,
      trackLocalhost: true,
    });
    
    enableAutoPageviews();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <SubDomainRoutes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
