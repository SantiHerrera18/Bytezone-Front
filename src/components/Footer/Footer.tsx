/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className="select-none bg-purple-900 rounded-lg m-4">
      <div className="select-none w-full max-w-screen-xl mx-auto p -4 md:py-8">
        <div className="select-none sm:flex sm:items-center sm:justify-between">
          <p className="select-none  flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="select-none self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bytezone
            </span>
          </p>

          <ul className="select-none flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <p className="select-none inline-block hover:underline me-4 md:me-6">
                About
              </p>
            </li>
            <li>
              <p className="select-none inline-block hover:underline me-4 md:me-6">
                Privacy Policy
              </p>
            </li>
            <li>
              <p className="select-none inline-block hover:underline me-4 md:me-6">
                Licensing
              </p>
            </li>
            <li>
              <p className="select-none inline-block hover:underline">
                Contact
              </p>
            </li>
          </ul>
        </div>
        <hr className="select-none my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="select-none block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <p className="select-none inline-block hover:underline">Bytezone™</p>.
          All Rightinline-block s Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
