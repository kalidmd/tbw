import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import cookies from 'js-cookie';

import './index.css';
import App from './App';

const currentLang = cookies.get('i18next');
const styleFont = currentLang === 'am' ?  " 'Times New Roman', Times, serif " : " 'Maven Pro', sans-serif "
document.body.style.fontFamily = styleFont;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedlngs: ['en', 'am'],
    fallbackLng: "en",
    detection: {
        order: ['cookie', 'localStorage','path' , 'htmlTag', 'subdomain'],
        caches: ['cookie'],
    },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  });

const loading = (
    <div className="loading">
    <div className="loading-ring"></div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={loading}>
        <App />
    </Suspense>
);


