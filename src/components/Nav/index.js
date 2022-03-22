import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    Tasevski87
                </a>

            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>
                        Contact
                        </span>
                    </li>
                    <li className="mx-2">
                        <a href="#projects" onClick={() => setContactSelected(false)}>
                            Projects
                        </a>
                    </li>

                    <li className="mx-2">
                        <a href="#resume" onClick={() => setContactSelected(false)}>
                            Resume
                        </a>
                        
                    </li>
                    {/* {categories.map((category) => (
                        <li
                            className={`mx-1 ${
                                currentCategory.name === category.name && !contactSelected && 'navActive'
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li> 
                        
                    ))} */}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;