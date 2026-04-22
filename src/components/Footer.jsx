export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          © {year} Dohyun (Eric) Kim · Built with React & Tailwind
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/EricK-6"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/erick06/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dohyunkim290106@gmail.com"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
