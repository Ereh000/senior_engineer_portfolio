export default function Footer() {
  return (
    <footer className="py-12 bg-[#0B0B0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tighter text-white">
            Arif Khan<span className="text-white/40">.</span>
          </span>
          <span className="text-sm text-white/40 ml-4">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-white/50">
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a> */}
          <a href="https://github.com/Kirito8400" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/arif-khan-01a711241" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
