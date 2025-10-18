import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';

export const Showcase = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const reduceMotion = useMediaQuery({
    query: '(prefers-reduced-motion: reduce)',
  });

  useGSAP(() => {
    if (isTablet || reduceMotion) {
      return;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#showcase',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .to('#showcase .mask img', {
        scale: 1.1,
      })
      .to('#showcase .content', { opacity: 1, y: 0, ease: 'none' });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [isTablet, reduceMotion]);

  return (
    <section id="showcase">
      <div className="media">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          src="/videos/game.mp4"
        />
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="mt-7 space-y-5 pe-10">
              <p>
                Introducing{' '}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
