const PostItem = ({ posts, handleDelete }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <div
              key={post.id}
              className="bg-orange-200 block max-w-sm p-6 border border-default rounded shadow-xs"
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                {post.title} <br />
              </h5>
                <span className="italic">Created at: {post.created_at}</span>
              <p className="text-body mb-6">{post.content}</p>
              <button
                onClick={() => handleDelete(post.id)}
                className="inline-flex bg-blue-900 rounded items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                Supprimer
              </button>
            </div>
            
          </>
        );
      })}
    </>
  );
};

export default PostItem;
