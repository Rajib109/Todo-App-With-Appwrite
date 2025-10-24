import React from 'react';

const Header = () => {


    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ];

    return (
        <div>
            <h1>Todo App</h1>
            <nav>
                <ul>
                    {navItems.map(item => (
                        <li key={item.name}>
                            <a href={item.path}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
