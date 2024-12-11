import { useEffect } from 'react';

// interface StarShowerBackgroundProps {
//   children: ReactNode;
// }

const StarShowerBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('star-shower-canvas') as HTMLCanvasElement;
    const c = canvas.getContext('2d');

    if (!c) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Star {
      radius: number;
      x: number;
      y: number;
      dx: number;
      dy: number;
      gravity: number;
      friction: number;

      constructor() {
        this.radius = (Math.random() * 10) + 5;
        this.x = this.radius + (canvas.width - this.radius * 2) * Math.random();
        this.y = -10;
        this.dx = (Math.random() - 0.5) * 20;
        this.dy = 30;
        this.gravity = 0.5;
        this.friction = 0.54;
      }

      update() {
        if (this.y + this.radius + this.dy >= canvas.height - groundHeight) {
          this.dy = -this.dy * this.friction;
          this.dx *= this.friction;
          this.radius -= 3;
          explosions.push(new Explosion(this));
        } else {
          this.dy += this.gravity;
        }

        if (this.x + this.radius + this.dx >= canvas.width || this.x - this.radius + this.dx < 0) {
          this.dx = -this.dx;
          this.dx *= this.friction;
          explosions.push(new Explosion(this));
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();

        for (let i = 0; i < explosions.length; i++) {
          explosions[i].update();
        }
      }

      draw() {
        c!.save();
        c!.beginPath();
        c!.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);
        c!.shadowColor = '#E3EAEF';
        c!.shadowBlur = 20;
        c!.shadowOffsetX = 0;
        c!.shadowOffsetY = 0;
        c!.fillStyle = "#E3EAEF";
        c!.fill();
        c!.closePath();
        c!.restore();
      }
    }

    class Particle {
      x: number;
      y: number;
      size: { width: number; height: number };
      dx: number;
      dy: number;
      gravity: number;
      friction: number;
      timeToLive: number;
      opacity: number;

      constructor(x: number, y: number, dx: number, dy: number) {
        this.x = x;
        this.y = y;
        this.size = { width: 2, height: 2 };
        this.dx = dx;
        this.dy = dy;
        this.gravity = 0.09;
        this.friction = 0.88;
        this.timeToLive = 3;
        this.opacity = 1;
      }

      update() {
        if (this.y + this.size.height + this.dy >= canvas.height - groundHeight) {
          this.dy = -this.dy * this.friction;
          this.dx *= this.friction;
        } else {
          this.dy += this.gravity;
        }

        if (this.x + this.size.width + this.dx >= canvas.width || this.x + this.dx < 0) {
          this.dx = -this.dx;
          this.dx *= this.friction;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
        this.timeToLive -= 0.01;
        this.opacity -= 1 / (this.timeToLive / 0.01);
      }

      draw() {
        c!.save();
        c!.fillStyle = `rgba(227, 234, 239, ${this.opacity})`;
        c!.shadowColor = '#E3EAEF';
        c!.shadowBlur = 20;
        c!.shadowOffsetX = 0;
        c!.shadowOffsetY = 0;
        c!.fillRect(this.x, this.y, this.size.width, this.size.height);
        c!.restore();
      }

      isAlive() {
        return this.timeToLive >= 0;
      }
    }

    class Explosion {
      particles: Particle[];

      constructor(star: Star) {
        this.particles = [];
        this.init(star);
      }

      init(parentStar: Star) {
        for (let i = 0; i < 8; i++) {
          const velocity = { x: (Math.random() - 0.5) * 5, y: (Math.random() - 0.5) * 15 };
          this.particles.push(new Particle(parentStar.x, parentStar.y, velocity.x, velocity.y));
        }
      }

      update() {
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].update();
          if (!this.particles[i].isAlive()) {
            this.particles.splice(i, 1);
          }
        }
      }
    }

    function createMountainRange(mountainAmount: number, height: number, color: string) {
      for (let i = 0; i < mountainAmount; i++) {
        const mountainWidth = canvas.width / mountainAmount;
        c!.beginPath();
        c!.moveTo(i * mountainWidth, canvas.height);
        c!.lineTo(i * mountainWidth + mountainWidth + 325, canvas.height);
        c!.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
        c!.lineTo(i * mountainWidth - 325, canvas.height);
        c!.fillStyle = color;
        c!.fill();
        c!.closePath();
      }
    }

    class MiniStar {
      x: number;
      y: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3;
      }

      draw() {
        c!.save();
        c!.beginPath();
        c!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c!.shadowColor = '#E3EAEF';
        c!.shadowBlur = (Math.random() * 10) + 10;
        c!.shadowOffsetX = 0;
        c!.shadowOffsetY = 0;
        c!.fillStyle = "white";
        c!.fill();
        c!.closePath();
        c!.restore();
      }
    }

    let timer = 0;
    const stars: Star[] = [];
    const explosions: Explosion[] = [];
    const groundHeight = canvas.height * 0.15;
    let randomSpawnRate = Math.floor((Math.random() * 25) + 60);
    const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, "#171e26");
    backgroundGradient.addColorStop(1, "#3f586b");

    const miniStars: MiniStar[] = [];
    for (let i = 0; i < 150; i++) {
      miniStars.push(new MiniStar());
    }

    function animate() {
      window.requestAnimationFrame(animate);
      c!.fillStyle = backgroundGradient;
      c!.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < miniStars.length; i++) {
        miniStars[i].draw();
      }
      createMountainRange(1, canvas.height - 50, "#384551");
      createMountainRange(2, canvas.height - 100, "#2B3843");
      createMountainRange(3, canvas.height - 300, "#26333E");

      c!.fillStyle = "#182028";
      c!.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        if (stars[i].radius <= 0) {
          stars.splice(i, 1);
        }
      }

      for (let i = 0; i < explosions.length; i++) {
        if (explosions[i].particles.length <= 0) {
          explosions.splice(i, 1);
        }
      }

      timer++;
      if (timer % randomSpawnRate === 0) {
        stars.push(new Star());
        randomSpawnRate = Math.floor((Math.random() * 10) + 75);
      }
    }

    animate();
  }, []);

  return (
    <canvas id="star-shower-canvas" ></canvas>
  );
};

export default StarShowerBackground;