const Blog = () => {
  return (
    <div className="page-container">
      <div className="bg-ornament-blue"></div>
      <div className="bg-ornament-purple"></div>

      <header className="page-header mt-8">
        <h1>Blog</h1>
        <p>Konten blog akan segera hadir.</p>
      </header>
      
      <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2rem]">
        <p className="text-slate-400 font-medium">Coming Soon</p>
      </div>
    </div>
  );
};

export default Blog;
