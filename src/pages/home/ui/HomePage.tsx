import { Hero } from '@/widgets/hero';
import { NavBar } from '@/widgets/nav-bar';
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
      </main>
    </>
  );
};
