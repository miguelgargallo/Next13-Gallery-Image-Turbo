export const Contact = () => {
  return (
    <div className="rounded-md ">
      <a href="mailto:sales@pylar.org" target={"_blank"} rel="noreferrer">
        <div className="m-5 flex items-center justify-center rounded-md border border-transparent bg-black p-5 px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6">
          Mail now
          <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            &rarr;
          </span>
        </div>
      </a>
      <a href="https://wa.me/+14077067844" target={"_blank"} rel="noreferrer">
        <div className="m-5 flex items-center justify-center rounded-md border border-transparent bg-black p-5 px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6">
          Whatsapp now
          <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            &rarr;
          </span>
        </div>
      </a>
      <a
        href="https://telegram.me/pencildomains"
        target={"_blank"}
        rel="noreferrer"
      >
        <div className="m-5 flex items-center justify-center rounded-md border border-transparent bg-black p-5 px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6">
          Telegram now
          <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            &rarr;
          </span>
        </div>
      </a>
    </div>
  );
};
