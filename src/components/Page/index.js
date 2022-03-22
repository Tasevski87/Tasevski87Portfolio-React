import React from 'react';
import About from '../About';
import Gallery from '../Gallery'
import ContactForm from '../Contact';
import Resume from '../Resume'


function Page({ currentCategory }) {

    const renderPage = () => {
        console.log( currentCategory.name );
        switch (currentCategory) {
            case 'about me':
                return <About />;
            case 'projects':
                return <Gallery />;
            case 'contact':
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