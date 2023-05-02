/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/public/misc/ButtonPrimary";
import ButtonOutline from "@/components/public/misc/ButtonOutline";
import { motion } from "framer-motion";
import getScrollAnimation from "utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/public/Layout/ScrollAnimationWrapper";

export default function Services() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="services"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Servicios disponibles
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Elige el servicio que necesites en este momento y con gusto te
              apoyaremos.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/citas.png"
                    width={145}
                    height={165}
                    alt="Tramites (Citas)"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Tramites (Citas)
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Generación de citas
                  </li>
                  <li className="relative check custom-list my-2">Anonimato</li>
                  <li className="relative check custom-list my-2">
                    Posibilidad de reagendar
                  </li>
                  <li className="relative check custom-list my-2">
                    Seguimiento y más
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Citas
                  </p>
                  <ButtonOutline>Seleccionar</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/legal.png"
                    width={145}
                    height={165}
                    alt="Demandas"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Demandas{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Registro</li>
                  <li className="relative check custom-list my-2">Analisis</li>
                  <li className="relative check custom-list my-2">
                    Posibilidad de reagendar
                  </li>
                  <li className="relative check custom-list my-2">
                    Seguimiento y más
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    <span className="text-black-500">Demandas</span>
                  </p>
                  <ButtonOutline>Seleccionar</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <img
                    src="/assets/coming.png"
                    width={145}
                    height={165}
                    alt="Próximos servicios"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Próximos servicios{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Atención ciudadana
                  </li>
                  <li className="relative check custom-list my-2">
                    Informes públicos
                  </li>
                  <li className="relative check custom-list my-2">
                    Monitoreo en tiempo real
                  </li>
                  <li className="relative check custom-list my-2">
                    Mejora continua
                  </li>
                  <li className="relative check custom-list my-2">
                    Capacitación pública{" "}
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    <span className="text-black-500">Próximamente</span>
                  </p>

                  <ButtonOutline>Deshabilitado</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-8/12 mx-auto"
            >
              Oficinas del INM en Ciudad Victoria - Direcciones, Teléfonos y
              Horarios de Atención.{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              1 Oficina de Representación Local del INM Ciudad Victoria.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-8"
              variants={scrollAnimation}
            >
              <div className="flex flex-col sm:flex-row shadow-lg rounded-lg p-4 overflow-scroll">
                <div className="w-full sm:w-1/3 bg-gray-100 flex items-center justify-center px-4 py-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Información de la oficina
                    </h2>
                    <p className="mb-4">
                      Oficina de Representación Local del INM Ciudad Victoria
                    </p>
                    <p className="mb-4">
                      <strong>Dirección:</strong> 7 y 8 Morelos Piso 4, Palacio
                      Federal, Sector Centro, C.P. 87000, Cd. Victoria,
                      Tamaulipas.
                    </p>
                    <p className="mb-4">
                      <strong>Horario de Atención:</strong> De Lunes a Viernes
                      de 09:00 a 15:00 horas.
                    </p>
                    <p>
                      <strong>Teléfono:</strong> 8343154894
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/3">
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=es&amp;q=Oficina de Representacion Local del INM Ciudad Victoria+Ciudad Victoria+Tamaulipas+MEXICO&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    data-src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Oficina de Representacion Local del INM Ciudad Victoria+Ciudad Victoria+Tamaulipas+MEXICO&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameBorder="0"
                    allowFullScreen
                    className="h-80 sm:h-full w-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-4" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-5xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-8/12 mx-auto"
            >
              Disponibilidad y atención ciudadana 24 horas.{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-8/12"
            >
              Si necesitas acudir a la Oficina de{" "}
              <strong>
                Representación del Instituto Nacional de Migración en Ciudad
                Victoria
              </strong>{" "}
              (Tamaulipas) para solicitar apoyo especializado para la
              realización o para el ingreso de la solicitud con todos los
              requisitos y documentos del trámite migratorio que precisas, aquí
              te brindamos toda la información con su ubicación y formas de
              contacto. Todos los trámites tienen que ser ingresados de manera
              presencial en la delegación del INM de Ciudad Victoria.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-12 overflow-scroll">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <table className="min-w-full divide-y divide-gray-200 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Oficina
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Dirección
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Teléfono
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sede INM Ciudad Victoria
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      7 y 8 Morelos Piso 4
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      8343154894
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
