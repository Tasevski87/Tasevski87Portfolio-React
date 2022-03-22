import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav(props) {
    const {
        categories ,
        setCurrentCategory,
        contactSelected,
        currentCategory,
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
                        <a href="#about" onClick={() => setCurrentCategory(categories[0])}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setCurrentCategory(categories[1])}>
                        Contact
                        </span>
                    </li>
                    <li className="mx-2">
                        <a href="#projects" onClick={() => setCurrentCategory(categories[2])}>
                            Projects
                        </a>
                    </li>

                    <li className="mx-2">
                        <a href="#resume" onClick={() => setCurrentCategory(categories[3])}>
                            Resume
                        </a>
                        
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;