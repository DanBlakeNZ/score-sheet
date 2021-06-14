import React from 'react';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import Header from './components/header/header.component';
import ScoresheetPage from './pages/scoresheet/scoresheet-page.component';

const App: React.FC = () => {
  return (
    <section className="app-container">
      <NavigationBar />
      <main>
        <Header />
        <ScoresheetPage />
      </main>
    </section>
  );
};

export default App;
