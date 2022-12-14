import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
          position: fixed;
          top: 0px;
          left: 0px;
          right: 0px;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    <nav>
      <h1><Link href="/"><a>The Feral Nerd</a></Link></h1>
      <div>
        <Link href="/">
          <a>About</a>
        </Link>
      </div>
    </nav>
    </>
  );
}
