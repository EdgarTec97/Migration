/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from "date-fns-tz";
import { toast } from "react-toastify";

declare const process: any;

export default function Comments({ ip, userAgent }: any) {
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment] = useState<string>("");
  const [load, setLoad] = useState<number>(0);

  const handleComment = (event: any) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.COMMENTS_API + "/comment/getAll?page=1&pageSize=10"
      );

      setComments(
        data.result.reverse().map((r: any) => {
          r.content = r.content
            .split("\n")
            .map((linea: string, index: number) => (
              <React.Fragment key={index}>
                {linea}
                <br />
              </React.Fragment>
            ));
          return r;
        })
      );
    })();
  }, [load]);

  const localDate = (fechaISO: string) => {
    const fecha = new Date(fechaISO);
    return format(fecha, "dd MMMM yyyy HH:mm:ss", {});
  };

  const save = () => {
    axios
      .post(process.env.COMMENTS_API + "/comment/save", {
        ip: navigator.geolocation,
        name: navigator.userAgent,
        title: "Inhabilitado temporalmente",
        content: comment,
      })
      .then(() => {
        setLoad(load + 1);
        setComment("");
      })
      .catch((e: any) => {
        console.info(e);
        toast.error("Error inesperado, intentelo nuevamente.");
      });
  };

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 pt-14"
      id="comments"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="shadow-lg rounded-lg p-4">
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-8/12 mx-auto">
              Comentarios
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {comments.map((comment, i) => (
              <div key={i} className="flex items-start pt-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="/assets/anonym.jpeg"
                  alt="Avatar"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Anonymous</h3>
                    <span className="text-gray-500 text-sm">
                      {localDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700 text-left">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-bold mb-2"
              >
                Escribe un comentario:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                name="comment"
                value={comment}
                onChange={handleComment}
                rows={3}
                placeholder="Escribe tu comentario aquí..."
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              disabled={!comment}
              onClick={save}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
