import "./hero.css";

type HeroProps = { children: string };

const Hero: React.FC<HeroProps> = ({ children }: HeroProps) => {
  return <h1 className="hero-text">{children}</h1>;
};

export default Hero;
