import { useState, useEffect } from 'react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = ({ options }: { options: ISourceOptions }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles id='tsparticles' options={options} particlesLoaded={particlesLoaded} />
    );
  }

  return <></>
};

export default ParticlesBackground;