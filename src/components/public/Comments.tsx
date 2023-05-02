/* eslint-disable @next/next/no-img-element */
export default function Comments() {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 pt-44"
      id="comments"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="shadow-lg rounded-lg p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Comments</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="flex items-start py-4">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="/assets/anonym.jpeg"
                alt="Avatar"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Anonymous</h3>
                  <span className="text-gray-500 text-sm">Hace 2 horas</span>
                </div>
                <p className="mt-2 text-gray-700 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <form className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-bold mb-2"
              >
                Left a comment:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                name="comment"
                rows={3}
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
