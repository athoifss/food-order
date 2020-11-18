import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardsContainer from "./CardsContainer";
import Loader from "./Loader";
import "./styles/app.css";
import { getRequest } from "./common/api";
import PaySuccess from "./Payment_Success";
import PayFail from "./Payment_Fail";
// import CardsContainer from "./CardsContainer";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(string) {
    let newData = {};
    Object.entries(recipe).map((item) => {
      newData[item[0]] = [];
    });

    Object.entries(recipe).map((item) => {
      item[1].map((obj) => {
        if (obj.name.toLowerCase().includes(string.toLowerCase())) {
          newData[item[0]].push(obj);
        }
      });
    });

    setRecipeSearch(newData);
  }

  useEffect(() => {
    setIsLoading(true);
    getRequest("/recipe")
      .then((resp) => {
        let newData = {};
        resp.data.forEach((item) => {
          newData[item.category] = [];
        });

        resp.data.forEach((item) => {
          newData[item.category].push(item);
        });

        setRecipe(newData);
        setRecipeSearch(newData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="rootApp">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar handleSearch={handleSearch} />
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={() => {
                  return (
                    <>
                      <CardsContainer recipe={recipeSearch} />
                    </>
                  );
                }}
              />
              <Route path="/paysuccess" component={PaySuccess} />
              <Route path="/payfail" component={PayFail} />
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
