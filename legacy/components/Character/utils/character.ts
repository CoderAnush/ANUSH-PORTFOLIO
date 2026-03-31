"use client";
import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                // Change colors to match site theme and customize avatar
                if (mesh.material) {
                  const matName = (mesh.material as THREE.Material).name?.toLowerCase() || '';
                  const meshName = mesh.name?.toLowerCase() || '';
                  
                  // Shirt
                  if (mesh.name === "BODY.SHIRT" || matName.includes("shirt")) { 
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#2c3e50"); // Darker shirt
                    mesh.material = newMat;
                  } 
                  // Pant
                  else if (mesh.name === "Pant" || matName.includes("pant")) {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#111111"); // Dark pants
                    mesh.material = newMat;
                  }
                  // Hair - Anush has dark hair
                  else if (matName.includes("hair") || meshName.includes("hair")) {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#1a1a1a"); // Dark brown/black hair
                    mesh.material = newMat;
                  }
                  // Skin - Tint it slightly to match Anush
                  else if (matName.includes("skin") || meshName.includes("skin") || meshName.includes("head") || meshName.includes("face") || mesh.name.includes("BODY")) {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    // Slightly warm skin tone
                    if (newMat.color) {
                      newMat.color.setHex(0xd2a58b);
                    }
                    mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
