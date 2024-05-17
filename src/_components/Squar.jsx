import { Card } from "./Card";
import { Footer } from "./Footer";

export function Squar({colorCode}) {
    return (
        <>
            <div className="mainDiv">                
                <Card colorCode={colorCode} />
                <Footer colorCode={colorCode} />
            </div>
            
        </>
    );
}