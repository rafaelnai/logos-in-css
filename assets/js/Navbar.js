const Navbar = () => {

    const links = ['React','Youtube'];
    const navbar = document.querySelector('#navbar');
    const content = document.querySelector('#content');
    const toggle = document.querySelector('.toggle-menu');

    const toggleMenu = () => {

        navbar.classList.toggle('active');
    };

    const listMenu = () => {

        return links.map(l => `
            <li>
                <a href="#" onClick="Navbar().renderContent(${l}().template())" id="${l}">${l}</a>
            </li>
        `).join('');
    };

    const renderMenu = () => {

        return navbar.innerHTML = `
            <nav>
                <div onClick="Navbar().toggleMenu()" class="toggle-menu"></div>
                <ul>
                    <li>
                        <h2>Logos in pure CSS</h2>
                    </li>
                    ${listMenu()}
                </ul>
            </nav>
        `;
    };

    const renderContent = conteudo => {

        toggleMenu();
        
        return content.innerHTML = conteudo;
    };

    return {
        listMenu,
        renderMenu,
        renderContent,
        toggleMenu
    };
}