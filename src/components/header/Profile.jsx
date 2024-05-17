import { Menu } from "../../_components/Menu";

export function Profile() {
    return (
        <>
            <div className="profile">
                <Menu navClass={'navClass'} ulClass={'ulClass'}/>                
                <button className='bottonProfile'></button>                                
            </div>            
        </>
    );
}