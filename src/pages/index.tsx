// si el usuario no esta autenticado mostrar login
// si el usuario esta autenticado mostrar formulario para crear un proyecto
// ver la lista de los ultimos 5 proyectos creado
import { ChangeEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  return (
    <>
      <div className="rounded-sm border-2 border-black flex flex-row mt-12 mr-12 ml-12 bg-[#13242b] gradient-background">
        <div className="w-3/6 flex-column">
          <div className="font-medium h-1/3">
            <p id="mainText" className="xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm pl-4 pt-2 text-white msize">
              BARHAIN
            </p>
          </div>
          <div className="font-medium h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm pl-4 text-white msize" id="subtitle">
              BEST LAP TIME
            </p>
            <p id="number" className="text-white pl-11 mt-4 xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm">
              1:31.447
            </p>
          </div>
        </div>

        <div className="block place-items: center">
        <div className="h-1/2 flex items-center justify-center">
            <p id="number" className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 border-2  border-white text-xs text-white	">
              326
            </p>
          </div>
          
          
          <div className="h-1/2 ">
            <p id="number" className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 border-2  border-white text-xs text-white ">
              250
            </p>
          </div>

        </div>
          
        

        <div className="font-medium w-24 ml-auto w-3/6">
          <img
            className="w-full h-full object-cover"
            src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png"
          />
        </div>
      </div>
      <div className="rounded-sm border-2 border-black flex flex-row mt-12 mr-12 ml-12 bg-[#13242b] gradient-background">
        <div className="w-3/6 flex-column">
          <div className="font-medium h-1/3">
            <p id="mainText" className="xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm pl-4 pt-2 text-white msize">
            JEDDAH
            </p>
          </div>
          <div className="font-medium h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm pl-4 text-white msize" id="subtitle">
              BEST LAP TIME
            </p>
            <p id="number" className="text-white pl-11 mt-4 xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm">
            1.27.500
            </p>
          </div>
        </div>

        <div className="block place-items: center">
        <div className="h-1/2 flex items-center justify-center">
            <p id="number" className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 border-2  border-white text-xs text-white	">
              326
            </p>
          </div>
          
          
          <div className="h-1/2 ">
            <p id="number" className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 border-2  border-white text-xs text-white ">
              250
            </p>
          </div>

        </div>
          
        

        <div className="font-medium w-24 ml-auto w-3/6">
          <img
            className="w-full h-full object-cover"
            src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png"
          />
        </div>
      </div>
      <div className="rounded-sm border-2 border-black flex flex-row mt-12 mr-12 ml-12 bg-[#13242b] gradient-background">
        <div className="w-3/6 flex-column">
          <div className="font-medium h-1/3">
            <p id="mainText" className="xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm pl-4 pt-2 text-white msize">
              ALBERT PARK
            </p>
          </div>
          <div className="font-medium h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm pl-4 text-white msize" id="subtitle">
              BEST LAP TIME
            </p>
            <p id="number" className="text-white pl-11 mt-4 xl:text-4xl lg:text-2xl md:text-2xl sm:text-sm">
            1:16.700
            </p>
          </div>
        </div>

        <div className="block place-items: center">
        <div className="h-1/2 flex items-center justify-center">
            <p id="number" className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 border-2  border-white text-xs text-white	">
              326
            </p>
          </div>
          
          
          <div className="h-1/2 ">
            <p id="number" className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm block rounded-full px-2 py-2 border-2  border-white text-xs text-white ">
              250
            </p>
          </div>

        </div>
          
        

        <div className="font-medium w-24 ml-auto w-3/6">
          <img
            className="w-full h-full object-cover"
            src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png"
          />
        </div>
      </div>
    </>
  );
}
