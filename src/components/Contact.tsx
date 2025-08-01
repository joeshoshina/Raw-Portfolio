const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center pb-10"
      id="contact"
    >
      <div className="w-full px-6 border-b-2 border-b-(--link-color) border-solid py-5 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Let’s Connect </h2>
      </div>
      <div className="max-w-3xl mx-auto px-6 pt-6 flex flex-col items-center gap--4">
        <p className="text-lg pb-5">
          Let’s connect — I’m always up for something creative.
        </p>
        <a
          href="mailto:hoshinajoe7@gmail.com"
          className="text-lg hover:text-(--link-hover-color) flex items-center gap-2 pb-5"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"></path>
          </svg>
          <span>hoshinajoe7@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/joehoshina/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-(--link-hover-color) flex items-center gap-2 pb-5"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 13 11.18V10.13H9.75V18.5H13V13.57C13 12.8 13.44 12.25 14.2 12.25C14.96 12.25 15.5 12.8 15.5 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 6 7.76 5.19 6.88 5.19C6 5.19 5.19 6 5.19 6.88C5.19 7.76 6 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"></path>
          </svg>
          <span>linkedin.com/in/joehoshina</span>
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
        <span>Based in Los Angeles, CA & Irvine, CA</span>
      </div>
      {/* svg are from Materical Design Icons */}
    </section>
  );
};

export default Contact;
