import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/public/Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/services.png"
              alt="VPN Illustrasi"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Multiples servicios disponibles para cualquier necesidad.
            </h3>
            <p className="my-2 text-black-500">
              El Departamento de Migración del Estado de Tamaulipas es una
              institución gubernamental encargada de gestionar la entrada y
              salida de personas en el estado, así como de regularizar la
              situación migratoria de los extranjeros que residen en la entidad.
              Sus principales funciones incluyen la expedición de visas y
              permisos de residencia, el control de la entrada y salida de
              personas en la entidad, la protección de los derechos de los
              migrantes y la implementación de programas y políticas que
              promuevan la integración de los migrantes a la sociedad
              tamaulipeca. El Departamento de Migración trabaja en coordinación
              con otras instituciones del gobierno estatal y federal, así como
              con organizaciones civiles y de la sociedad en general para
              cumplir con sus objetivos y mejorar la atención a los migrantes en
              Tamaulipas.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
