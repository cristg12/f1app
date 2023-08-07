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
        <div className="w-3/6">
          <div className="font-medium h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white">
              BARHAIN
            </p>
          </div>
          <div className="font-medium h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white">
              BEST LAP TIME
            </p>
          </div>
          {/* <div className="font-medium h-1/3 object-cover font-medium w-fit text-center">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white w-fit text-xs	place-items-center	 ">
              TOP SPEED
            </p>
            
            <p className=" xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm bg-white rounded-full px-1 py-1 w-fit text-xs	place-items-center	">
              326
            </p>
          </div> */}
          {/* Hay que arreglar el tamaño del texto y no se si tengo que poner width fit para el damaño del div, pero no se como arreglar el tamaño del texto */}
          <div className="font-medium h-1/3 object-cover flex flex-col justify-center items-center">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white text-xs">
              TOP SPEED
            </p>
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm  rounded-full px-2 py-2 border-2 border-white text-xs text-white">
              326
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
        <div className="w-3/6">
          <div className="font-medium  mx-0.5 my-0.5  h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white">
              JEDDAH
            </p>
          </div>
          <div className="font-medium mx-0.5 my-0.5 h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white">
              BEST LAP TIME
            </p>
          </div>
        </div>
        <div className="font-medium w-24 ml-auto w-3/6">
          <img
            className="w-full h-full objec t-cover"
            src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/9col/image.png"
          />
        </div>
      </div>
      <div className="rounded-sm border-2 border-black flex flex-row mt-12 mr-12 ml-12 bg-[#13242b] gradient-background">
        <div className="w-3/6">
          <div className="font-medium mx-0.5 my-0.5  h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white">
              ALBERT PARK
            </p>
          </div>
          <div className="font-medium  mx-0.5 my-0.5 h-1/3">
            <p className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-white">
              BEST LAP TIME
            </p>
          </div>
        </div>
        <div className="font-medium w-3/6 ml-auto w-3/6">
          <img
            className="w-full h-full object-cover"
            src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png"
          />
        </div>
        <div ></div>
      </div>
    </>
  );
}
