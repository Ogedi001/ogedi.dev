import { Github, Linkedin, Twitter } from "lucide-react";

export function SocialLinks() {
  return (
    <div>
      <h3 className="font-medium mb-4">Social links</h3>
      <div className="flex gap-3">
        <a
          href="https://github.com/Ogedi001"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-muted transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/ogedi-favour-uchibeke-553955152"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-muted transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/Ogedi_01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-muted transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
