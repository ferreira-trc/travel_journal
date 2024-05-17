import { PostCard } from '../components/post/PostCard';
import posts from '../data/posts.json';


export function LandingPage() {
    return (
        <>
            <main>
                {posts.map( (p) => {
                    return (
                        <PostCard id={p.id} postTitle= {p.title} 
                        avatarImg={p.user.avatarURL} mainImg={p.mainImage}/>
                    );
                })}
                
            </main>
        </>
    )
}