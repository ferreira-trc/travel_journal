export function Button({clas, content}) {
    return (
        <>
            <button className={clas} type='submit'>{content}</button>
        </>
        
    )
}