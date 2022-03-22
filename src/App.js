import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery'
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Page from './components/Page';




function App() {
  const [categories] = useState([
    { name: 'About me ' },
    { name: 'contact' },
    { name: 'projects' },
    { name: 'resume' }
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


        {/* {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
          
        )} */}
      </main>
      <div className="App">
        <Footer />
      </div>
    </div>

  );
}

export default App;