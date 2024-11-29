import { lazy } from "react";

// Lazy-loaded components
const Home = lazy(() => import("../pages/EntryPagePostVideo.jsx"));
const Questionnaire = lazy(() => import("../pages/Questionnaire.jsx"));
const Product = lazy(() => import("../pages/Product.jsx"));
const Results = lazy(() => import("../pages/Results.jsx"));
const Personality = lazy(() => import("../pages/Personality.jsx"));
const LoginPage = lazy(() => import("../pages/LoginPage.jsx"));

export { Home, Questionnaire, Product, Results, Personality, LoginPage };
