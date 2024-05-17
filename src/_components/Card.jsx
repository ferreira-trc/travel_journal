export function Card({colorCode}) {
    return (
        <>
            <div className="cardDiv" style={{backgroundColor: colorCode}}></div>
        </>
    );
}