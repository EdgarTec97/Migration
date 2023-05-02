/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-40 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img
            src="/assets/logo-tam.png"
            alt=""
            className="h-12 w-auto mb-6 object-cover"
          />
          <p className="mb-4">
            <strong className="font-medium">INM,</strong> Instituto Nacional de
            Migración en Ciudad Victoria, Tamaulipas.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img src="assets/Icon/facebook.svg" alt="" className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img src="assets/Icon/twitter.svg" alt="" className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img src="assets/Icon/instagram.svg" alt="" className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - INM</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Servicios</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tramites{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Quejas{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Demandas{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Citas{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Registro{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Atención{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Normas</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              INM{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Capacitación{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Nosotros{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Políticas de privacidad{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Términos y condiciónes{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Equipo</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Informático{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terceros{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Anonimato{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
