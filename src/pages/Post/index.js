import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NotFound from "pages/NotFound";
import DefaultStructure from "components/DefaultStructure";
import PostCard from "components/PostCard";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  console.log(recommendedPosts);

  return (
    <Routes>
      <Route path="*" element={<DefaultStructure />}>
        <Route
          index
          element={
            <ModelPost
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className="tituloOutrosPosts">
                Outros posts que você pode gostar:
              </h2>
              <ul className="postsRecomendados">
                {recommendedPosts.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </ModelPost>
          }
        />
      </Route>
    </Routes>
  );
}
