import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HomePage } from '@/pages/home';

gsap.registerPlugin(ScrollTrigger);

export const App = () => <HomePage />;

export default App;
