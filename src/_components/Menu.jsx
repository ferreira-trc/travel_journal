import { Navlink } from "./NavLink"

export function Menu({navClass, ulClass}) {

    const menuList = [
        {
            name: 'Home',
            url: '/home'
        },

        {
            name: 'All Post',
            url: '/allpost'
        },

        {
            name: 'Trendig',
            url: '/trending'
        },

        {
            name: 'My Profile',
            url: '/myprofile'
        },

        {
            name: 'Logout',
            url: '/logout'
        },
    ]

    return (
        <>
            <nav className={navClass}>
                <ul className={ulClass}>
                    {menuList.map((menuItem) => (
                        <Navlink url={menuItem.url} name={menuItem.name}/>
                        ))
                    }                                       
                </ul>
            </nav>
        </>
    )
}