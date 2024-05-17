export function PostCard({id, postTitle, avatarImg, mainImg}) {
    return (
        <>
            <div className="post">
                <article key={id}>
                    <section className="headerSection">
                        <h1>{postTitle}</h1>
                        <img src={avatarImg} alt="avatarImg" />
                    </section>

                    <section className="mainSection">
                        <img src={mainImg} alt="mainImg" />
                    </section>

                    <section className="buttonsSection">
                        <button>Like</button>
                        <button>Comment</button>
                    </section>
                </article>
            </div>
        </>
    );
}