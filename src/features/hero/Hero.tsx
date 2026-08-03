import type { HeroProps } from "./Hero.types";

function Hero({userData}: HeroProps) {
  return (
    <section>
          Welcome back {userData.name}!
          <p>Your next quest</p>{userData.level}
        </section>
  );
}

export default Hero;
