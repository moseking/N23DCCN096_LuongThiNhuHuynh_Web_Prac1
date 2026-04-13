async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch post");
    return res.json();
}
  
export default async function BlogDetail({ params }) {
    const { id } = await params;
    const post = await getPost(id);
  
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  
          {/* Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
  
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {post.title}
            </h1>
  
            {/* Meta */}
            <p className="text-sm text-gray-400 mb-6">
              ✍️ Author: User #{post.userId}
            </p>
  
            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
  
            {/* Content */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
              {post.body}
            </p>
  
            {/* Back button */}
            <a
              href="/"
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </div>
    );
}