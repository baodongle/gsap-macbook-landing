import { Hero } from '@/widgets/hero';
import { NavBar } from '@/widgets/nav-bar';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
      </main>
    </>
  );
};
