import React from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/Overview';
import CharacterDetail from './pages/CharacterDetail';
import CharacterGuides from './pages/guides/CharacterGuides';
import NewbieGuide from './pages/guides/NewbieGuide';
import TierList from './pages/guides/TierList';
import AwakeningCalculator from './pages/guides/AwakeningCalculator';
import PlaceholderGuide from './pages/guides/PlaceholderGuide';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/overview" component={Overview} />
        <Route path="/character/:slug" component={CharacterDetail} />
        
        {/* Guide Subpages */}
        <Route path="/guides/characters" component={CharacterGuides} />
        <Route path="/guides/newbie" component={NewbieGuide} />
        <Route path="/guides/tierlist" component={TierList} />
        <Route path="/guides/awakening" component={AwakeningCalculator} />
        <Route path="/guides/rerolling">
          {() => <PlaceholderGuide title="Rerolling Guide" color="var(--color-blue)" />}
        </Route>
        <Route path="/guides/invest">
          {() => <PlaceholderGuide title="Who to Invest In" color="#00FF41" />}
        </Route>
        <Route path="/guides/rta">
          {() => <PlaceholderGuide title="RTA (PvP) Guide" color="var(--color-red)" />}
        </Route>
        <Route path="/guides/gvg">
          {() => <PlaceholderGuide title="Guild Versus Guild" color="#800080" />}
        </Route>
        <Route path="/guides/objectives">
          {() => <PlaceholderGuide title="Objectives in Different Levels" color="var(--color-yellow)" />}
        </Route>
        <Route path="/guides/modules">
          {() => <PlaceholderGuide title="Modules Guide" color="var(--color-blue)" />}
        </Route>
        <Route path="/guides/shells">
          {() => <PlaceholderGuide title="Shells Guide" color="#00FF41" />}
        </Route>

        <Route>
          <div className="section section-dark flex-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
              <h1 className="heading-jumbo">404</h1>
              <p>Page Not Found</p>
            </div>
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
