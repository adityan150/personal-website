import Ticker from "framer-motion-ticker";
import "./iconTicker.css";
import { useEffect, useState } from "react";

const icons = [
  "java",
  "html",
  "css",
  "javascript",
  "react",
  "nextjs",
  "mongodb",
  "nodejs",
  "golang",
  "sql",
  "postman",
  "linux",
  "git",
  "github",
  "graphql",
];

type IconTickerProps = {
  duration?: number;
};

const IconTicker: React.FC<IconTickerProps> = ({
  duration = 20,
}: IconTickerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsPlaying(true), 5000);
  }, []);

  return (
    <Ticker
      duration={duration}
      isPlaying={isPlaying}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {icons.map((item: string, i: number) => (
        <div key={i} className="skill">
          <img src={`/src/assets/icons/${item}.svg`} alt={item} />
          <p className="skill-text">{item}</p>
        </div>
      ))}
    </Ticker>
  );
};

export default IconTicker;
