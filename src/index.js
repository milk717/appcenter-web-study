import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {rootReducer} from "./modules";
import {RecoilRoot} from "recoil";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: rootReducer,
});

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RecoilRoot>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <App />
                </React.Suspense>
            </RecoilRoot>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
