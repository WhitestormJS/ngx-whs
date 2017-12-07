import { Injectable } from '@angular/core';
import * as WHS from 'whs/build/whs';


import { Vector3, Vector2, MeshPhongMaterial, PCFSoftShadowMap, FlatShading, MeshStandardMaterial } from 'three';

const radiusMax = 220; // Max radius of the asteroid belt.
const particleCount = 400; // Ammount of asteroids.
const particleMinRadius = 0.1; // Min of asteroid radius.
const particleMaxRadius = 4; // Max of asteroid radius.
const planetSize = 50; // Radius of planet.
const radiusMin = 110; // Min radius of the asteroid belt.

const colors = {
  green: 0x8fc999,
  blue: 0x5fc4d0,
  orange: 0xee5624,
  yellow: 0xfaff70
};

const mat = [
  new MeshPhongMaterial({color: colors.green, shading: FlatShading}),
  new MeshPhongMaterial({color: colors.blue, shading: FlatShading}),
  new MeshPhongMaterial({color: colors.orange, shading: FlatShading}),
  new MeshPhongMaterial({color: colors.yellow, shading: FlatShading})
];

const dynamicGeometry = new WHS.DynamicGeometryModule();
const material = new MeshStandardMaterial({
  shading: FlatShading,
  emissive: 0x270000,
  roughness: 0.9,
});


const particleType = [
  {
    type: 'Dodecahedron',
    params: {
      geometry: {
        buffer: true,
        radius: 10
      },
      modules: [
        dynamicGeometry
      ],
      material
    }
  },
  {
    type: 'Box',
    params: {
      geometry: {
        buffer: true,
        width: 10,
        height: 10,
        depth: 10
      },
      modules: [
        dynamicGeometry
      ],
      material
    }
  },
  {
    type: 'Cylinder',
    params: {
      geometry: {
        buffer: true,
        radiusTop: 0,
        radiusBottom: 10,
        height: 10
      },
      modules: [
        dynamicGeometry
      ],
      material
    }
  },
  {
    type: 'Sphere',
    params: {
      geometry: {
        buffer: true,
        radius: 10
      },
      modules: [
        dynamicGeometry
      ],
      material
    }
  }
];





@Injectable()
export class SaturnService {

  get containerModules() {
    return [
      new WHS.SceneModule(),
      new WHS.DefineModule('camera', new WHS.PerspectiveCamera({
        position: new Vector3(0, 100, 400),
        far: 2000,
        fov: 75,
        near: 1
      })),
      new WHS.RenderingModule({
        bgColor: 0x2a3340,
        renderer: {
          antialias: true,
          shadowmap: {
            type: PCFSoftShadowMap
          }
        }
      }, {shadow: true}),
      new WHS.OrbitControlsModule(),
      new WHS.ResizeModule()
    ];
  }

  get planetParams() {
    return {
      geometry: {
        radius: planetSize,
        detail: 2
      },
      material: new MeshStandardMaterial({
        color: 0xee5624,
        shading: FlatShading,
        roughness: 0.9,
        emissive: 0x270000
      })
    };
  }


  get directionalLight() {
    return {
      color: 0xffffff,
      intensity: 1.5,
      distance: 800,
      shadow: {
        mapSize: {
          width: 2048,
          height: 2048
        },
        camera: {
          left: -800,
          right: 800,
          top: 800,
          bottom: -800,
          far: 800
        }
      },
      position: {
        x: 300,
        z: 300,
        y: 100
      }
    };
  }

  getParticle() {
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(particleType[Math.ceil(Math.random() * 3)]);
    }

    return particles;
  }

  particleReady(particle) {

    console.log('12312-1312', particle);

    const radius = particleMinRadius + Math.random() * (particleMaxRadius - particleMinRadius);

    particle.g_({
      radiusBottom: radius,
      radiusTop: 0,
      height: particle instanceof WHS.Cylinder ? radius * 2 : radius,
      width: radius,
      depth: radius,
      radius
    });

    particle.material = mat[Math.floor(4 * Math.random())]; // Set custom THREE.Material to mesh.

    // Particle data.
    particle.data = {
      distance: radiusMin + Math.random() * (radiusMax - radiusMin),
      angle: Math.random() * Math.PI * 2
    };

    // Set position & rotation.
    particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
    particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
    particle.position.y = -10 * Math.random() + 4;

    particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());
  }

  particleLoop() {
    return (host) => {
      const particle = host._instance;
      particle.data.angle += 0.02 * particle.data.distance / radiusMax;
      particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
      particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
      particle.rotation.x += Math.PI / 60;
      particle.rotation.y += Math.PI / 60;
    };
  }

  planetLoop() {
    return (host) => {
      const planet = host._instance;
      planet.rotation.y += 0.005;
    };
  }


}
