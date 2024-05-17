import { Hamburguer } from "./Hamburguer";
import { Profile } from "./Profile";

export function Header() {
    return (
    <>
        <header className="mainHeader">
           <Hamburguer/>
           <Profile/>          
        </header>
    </>
    );
}