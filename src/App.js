import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Page from './components/Page';





function App() {
  const [categories] = useState([
    { name: 'About me ' },
    { name: 'Contact' },
    { name: 'projects' },
    { name: 'Resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
      <Page currentCategory = { currentCategory } ></Page>
      </main>
      <div className="App">
  
        <Footer />
      </div>
    </div>

  );
}

export default App;