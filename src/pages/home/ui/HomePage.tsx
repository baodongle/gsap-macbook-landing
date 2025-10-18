import { Hero } from '@/widgets/hero';
import { NavBar } from '@/widgets/nav-bar';
import { Performance } from '@/widgets/performance';
import { ProductViewer } from '@/widgets/product-viewer';
import { Showcase } from '@/widgets/showcase';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
      </main>
    </>
  );
};
