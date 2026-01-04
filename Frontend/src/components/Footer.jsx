function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500 flex flex-col sm:flex-row justify-between">
        
        <p>© {new Date().getFullYear()} PGFinder</p>

        <p>
          Built with ❤️ for students
        </p>

      </div>
    </footer>
  );
}

export default Footer;
