import { useState, useEffect } from "react";

// ID, SIZE, X, Y, OPACITY, ANIMATIONDURATION , STAR CONTAINS LIST OF COMPONENTS
// id,size,x,y,delay,duration , meteor contains
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [orbs, setOrbs] = useState([])
  const [blobs] = useState([
    { id: 'b1', color: 'from-violet-500/12 to-fuchsia-500/12', top: '12%', left: '6%', size: 320 },
    { id: 'b2', color: 'from-cyan-500/12 to-blue-500/12', top: '62%', left: '68%', size: 360 },
  ]);

  // Generate stars on mount and on resize
  useEffect(() => {
    generateStars();
    generateOrbs();
    const handleResize = () =>{
        generateStars();
        generateOrbs();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / (document.documentElement.classList.contains('dark') ? 5000 : 7000)
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 2 + 1,
      });
    }
    setStars(newStars);
  };

  const generateOrbs = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const numberOfOrbs = isDark ? 3 : 4;
    const colors = isDark
      ? [
          'from-fuchsia-500/10 to-purple-500/10',
          'from-blue-500/10 to-cyan-500/10',
          'from-emerald-500/10 to-teal-500/10',
        ]
      : [
          'from-fuchsia-500/15 to-purple-500/15',
          'from-blue-500/15 to-cyan-500/15',
          'from-amber-500/15 to-orange-500/15',
          'from-emerald-500/15 to-teal-500/15',
        ];
    const newOrbs = Array.from({ length: numberOfOrbs }).map((_, i) => ({
      id: `o${i}`,
      color: colors[i % colors.length],
      size: Math.round((isDark ? 160 : 200) + Math.random() * (isDark ? 80 : 120)),
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 10,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 4,
    }));
    setOrbs(newOrbs);
  };

  

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* soft gradient blobs */}
      {blobs.map((b) => (
        <div
          key={b.id}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${b.color}`}
          style={{
            width: b.size + 'px',
            height: b.size + 'px',
            top: b.top,
            left: b.left,
          }}
        />
      ))}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle absolute"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        ></div>
      ))}

      {orbs.map((o) => (
        <div
          key={o.id}
          className={`absolute rounded-full blur-2xl bg-gradient-to-br ${o.color}`}
          style={{
            width: o.size + 'px',
            height: o.size + 'px',
            left: o.x + '%',
            top: o.y + '%',
            opacity: 0.7,
            animation: `float ${o.duration}s ease-in-out ${o.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
