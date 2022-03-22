import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery'
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';



function App() {
  const [categories] = useState([
    { name: 'projects', description: 'My portfolio' },
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
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
          
        )}
      
      </main>
      <div className="App">
        <Footer />
      </div>
    </div>

  );
}

export default App;


//https://coolors.co/54428e-8963ba-afe3c0-90c290-688b58
//https://reactgo.com/react-sticky-footer/