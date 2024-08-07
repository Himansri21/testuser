const FooterPost = () => {
    return (
      <div className="flex items-end w-full bg-white">
        <footer className="w-full text-gray-700 bg-gray-100 body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a href="/" className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69" xmlns="http://www.w3.org/2000/svg">
                  <path d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z"
                    fillRule="nonzero" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a href="/" className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.45 3c-2.64 0-4.79 2.15-4.79 4.79 0 .38.04.75.12 1.1C7.69 8.75 4.07 6.75 1.64 3.75a4.76 4.76 0 00-.65 2.4c0 1.66.85 3.13 2.13 3.99a4.51 4.51 0 01-2.17-.6v.06c0 2.32 1.65 4.26 3.83 4.7a4.52 4.52 0 01-2.15.08c.61 1.9 2.38 3.29 4.48 3.32A9.06 9.06 0 010 19.54 12.78 12.78 0 007.29 21c8.67 0 13.42-7.18 13.42-13.42 0-.2 0-.41-.01-.61A9.67 9.67 0 0024 4.56a9.27 9.27 0 01-2.65.73 4.51 4.51 0 001.98-2.5z"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                      <path d="M17.5 6.5h.01"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M16 8a6 6 0 00-12 0c0 3.87 3.13 7 7 7s7-3.13 7-7zm-9.36-1.36A2.14 2.14 0 118 8a2.13 2.13 0 01-1.36-1.36zm9.36 7.36a8.46 8.46 0 01-4 1c-1.45 0-2.8-.37-4-1a9.84 9.84 0 00-6 5c0 .28.22.5.5.5h19a.5.5 0 00.5-.5 9.84 9.84 0 00-6-5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 text-center lg:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-2 text-gray-900 title-font text-md tracking-widest">CATEGORIES</h2>
                <nav className="mb-10 list-none">
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">First Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Second Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Third Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Fourth Link</a></li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-2 text-gray-900 title-font text-md tracking-widest">CATEGORIES</h2>
                <nav className="mb-10 list-none">
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">First Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Second Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Third Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Fourth Link</a></li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-2 text-gray-900 title-font text-md tracking-widest">CATEGORIES</h2>
                <nav className="mb-10 list-none">
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">First Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Second Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Third Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Fourth Link</a></li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-2 text-gray-900 title-font text-md tracking-widest">CATEGORIES</h2>
                <nav className="mb-10 list-none">
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">First Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Second Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Third Link</a></li>
                  <li><a href="/" className="text-gray-600 cursor-pointer hover:text-gray-800">Fourth Link</a></li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container px-5 py-6 mx-auto">
              <p className="text-sm text-gray-500 capitalize xl:text-center">© 2023 All Rights Reserved <a href="#"
                  rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">@Himansri21</a></p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default FooterPost;
  