import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ThemeContext from "../foodies/src/context/ThemeContext/ThemeContext";
import FoodProvider from "../foodies/src/context/FoodContext/FoodProvider";
import Page from "../foodies/src/containers/Page/Page";
import Recipes from "../foodies/src/containers/Recipes/Recipes";
import PageNotFound from "../foodies/src/components/PageNotFound/PageNotFound";

import "./tailwind.generated.css";

function App() {
    const context = useContext(ThemeContext);

    return (
        <div
            className={[
                `theme-${context.theme}`,
                "container main bg-background-secondary",
            ].join(" ")}
        >
            <Router>
                <FoodProvider>
                    <Switch>
                        <Route path="/" exact component={Page} />
                        <Route path="/food/:id" component={Recipes} />
                        <Route component={PageNotFound} />
                    </Switch>
                </FoodProvider>
            </Router>
        </div>
    );
}

export default App;
