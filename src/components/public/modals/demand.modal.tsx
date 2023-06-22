import React, { useState } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

declare const process: any;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "none",
    padding: "0",
    width: "80%",
    maxWidth: "500px",
    height: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#__next");

export default function DemandModal({
  modalIsOpen,
  closeModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
}) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [reason, setReason] = useState<string>("");

  const handleReasonDataChange = (event: any) => {
    setReason(event.target.value);
  };

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El formato del email es incorrecto")
        .required("El email no puede ir vacio"),
      name: Yup.string().required("El nombre es obligatorio"),
      phoneNumber: Yup.string().required("El teléfono es obligatorio"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const { name, email, phoneNumber }: any = values;

      if (!startDate || !endDate) {
        toast.error("El rango de fechas es obligatorio.");
        return;
      }

      if (!reason) {
        toast.error("Indique la razón de la demanda.");
        return;
      }

      try {
        let success: boolean = await axios.post(process.env.FORM_API, {
          status: "pending",
          name,
          email,
          phoneNumber,
          reason,
          startDate: startDate!.toISOString(),
          endDate: endDate!.toISOString(),
          type: "demand",
        });

        if (!success) {
          toast.error("Error inesperado, intente nuevamente.");
          return;
        }

        setEndDate(null);
        setStartDate(null);
        setReason("");

        toast.success("Demanda registrada correctamente.");
        resetForm();
        closeModal();
      } catch (error: any) {
        toast.error(
          "Error inesperado, intente nuevamente. código:" + error.toString()
        );
      }
    },
  });

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Generar Demanda
            </h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="sr-only" htmlFor="name">
                  Nombre Completo
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Nombre Completo"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>

                {formik.touched.name && formik.errors.name ? (
                  <div className="mt-2 my-1 bg-red-100 border-l-2 border-red-500 text-red-600 p-2 text-sm">
                    <p className="font-bold">Error</p>
                    <p className="text-xs">{formik.errors.name}</p>
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="sr-only" htmlFor="email">
                  Correo Electrónico
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="example@example.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-2 my-1 bg-red-100 border-l-2 border-red-500 text-red-600 p-2 text-sm">
                    <p className="font-bold">Error</p>
                    <p className="text-xs">{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="sr-only" htmlFor="phoneNumber">
                  Número Celular
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BsFillTelephoneFill className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="000000000000"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                </div>

                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="mt-2 my-1 bg-red-100 border-l-2 border-red-500 text-red-600 p-2 text-sm">
                    <p className="font-bold">Error</p>
                    <p className="text-xs">{formik.errors.phoneNumber}</p>
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="sr-only" htmlFor="reason">
                  Motivo de la demanda
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiPencilAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    value={reason}
                    onChange={handleReasonDataChange}
                    name="reason"
                    id="reason"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Motivo de la demanda"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-2/2">
                  <label className="block text-sm font-medium text-gray-700 mb-6 mt-4">
                    Seleccione un rango de fechas para asignación de cita.
                  </label>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Fecha de inicio
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Fecha de fin
                  </label>
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
