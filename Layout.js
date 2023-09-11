import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function Layout({ children }) {
  return (
    <div>
      <header>
        {/* Contenu du header */}
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </main>
      <footer>
        {/* Contenu du footer */}
      </footer>
    </div>
  );
}

export default Layout;