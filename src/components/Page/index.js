import React from 'react';
import About from '../About';
import Gallery from '../Gallery'
import ContactForm from '../Contact';
import Resume from '../Resume'


function Page({ currentCategory }) {

    const renderPage = () => {
        console.log( currentCategory.name );
        switch (currentCategory.name) {
            case 'about me':
                return <About  />;
            case 'projects':
                return <Gallery currentCategory = { currentCategory } />;
            case 'Contact':
                return <ContactForm />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;
        }
    };
    return (

        <section>
            <h2>{(currentCategory.name)}</h2>
            <div>{renderPage()}</div>
        </section>

    )

}


export default Page