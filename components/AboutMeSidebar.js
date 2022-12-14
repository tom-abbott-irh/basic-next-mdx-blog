import Link from "next/link";

export default function AboutMeSidebar() {
  return (
    <>
      <style jsx>{`
        aside {
          background: #444;
          width: 200px;
          padding: 1rem 2rem;
          font-size: 1rem;
          position: absolute;
          top: 8rem;
          left: 2rem;
          border-radius: 10px;
        }
        aside h1 {
            margin: 0;
            font-size: 1.2rem;
            font-weight: bold;
        }
      `}</style>
      <aside>
        <h1>Tom Abbott</h1>
        <div>Principle Frontend Developer</div>
      </aside>
    </>
  );
}
