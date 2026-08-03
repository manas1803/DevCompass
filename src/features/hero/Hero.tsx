import type { HeroProps } from "./Hero.types";

function Hero({username}: HeroProps) {
  return (
    <section>
          Welcome back {username}!
          <p>Your next quest awaits</p>
        </section>
  );
}

export default Hero;
