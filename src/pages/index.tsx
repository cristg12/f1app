// si el usuario no esta autenticado mostrar login
// si el usuario esta autenticado mostrar formulario para crear un proyecto
// ver la lista de los ultimos 5 proyectos creado
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const importImage = (fileName: any) => ({
    src: require(`../../public/images/${fileName}`).default,
    alt: "Image",
  });

  const imageCollection: any = {
    images: {
      1: {
        id: "barhain",
        src: "/images/barhain.png",
        alt: "barhain",
      },
      2: {
        id: "jeddah",
        src: "/images/jeddah.png",
        alt: "barhain",
      },
      3: {
        id: "jeddah",
        src: "/images/jeddah.png",
        alt: "barhain",
      }
      
    },
  };

  const [state, setState] = useState([]);

  async function getCircuitName() {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_API + "f1/2023.json"
      );
      console.log(
        "🚀 ~ file: index.tsx:53 ~ getProjects ~ data:",
        data.MRData.RaceTable.Races
      );
      setState(data.MRData.RaceTable.Races);
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    getCircuitName();
  }, []);

  return (
    <>
      {state
        ? state.map((p: any) => (
            <div key={p.round} className="d-flex text-body-secondary pt-3">
              <div className="rounded-sm border-2 border-black flex flex-row mt-12 mr-12 ml-12 bg-[#13242b] gradient-background">
                <div className="w-1/3 flex-column">
                  <div className="font-medium h-1/3">
                    <p
                      id="mainText"
                      className="xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm pl-4 pt-2 text-white msize"
                    >
                      {p.raceName}
                    </p>
                  </div>
                  <div className="font-medium h-1/3">
                    <p
                      className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm pl-4 text-white msize"
                      id="subtitle"
                    >
                      BEST LAP TIME
                    </p>
                    <p
                      id="lapNumber"
                      className="text-white pl-11 xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm"
                    >
                      1:31.447
                    </p>
                    <p className="text-white pl-11 mt-4 xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm"></p>
                  </div>
                </div>
                <div className="block place-items: center">
                  <div className="h-1/2 flex flex-col items-center justify-center">
                    <div
                      id="smallCircle"
                      className="flex items-center justify-center xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-10 sm:h-8 border-3 border-white rounded-full"
                    >
                      <p
                        id="number"
                        className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 text-xs text-white 	"
                      >
                        3
                      </p>
                    </div>
                    <p
                      id="hiddenText"
                      className="text-white text-center justify-center sm:hidden"
                    >
                      Max. Speed
                    </p>
                  </div>

                  <div className=" flex flex-col items-center justify-center ">
                    <div
                      id="smallCircle"
                      className="flex items-center justify-center w-14 h-14 border-3 border-white rounded-full"
                    >
                      <p
                        id="number"
                        className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 text-xs text-white 	"
                      >
                        3
                      </p>
                    </div>
                    <p
                      id="hiddenText"
                      className="text-white text-center justify-center "
                    >
                      DRS Zone
                    </p>
                  </div>
                  
                </div>

                <div className="font-medium ml-auto w-8/12 xl:p-4">
                  {state.map((circuit: any) => {
                    const matchingImage = Object.keys(imageCollection.images).find((key) => key === circuit.round);
                    console.log(matchingImage)

                    if (matchingImage) {
                      const image = imageCollection.images[matchingImage];

                      return (
                        <div key={circuit.circuitId}>
                          <img src={image.src} alt={image.alt} />
                          <p>{circuit.circuitName}</p>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>
          ))
        : ""}
        
      

      <img src="/images/barhain.png" alt="" />
    </>
  );
}