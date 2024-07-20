const HeroSection = () => {
  return (
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-white"
      style={{ 
        backgroundImage: 'url(/images/HERO.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-0 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-300 hover:ring-black">
          Announcing our next round of funding.{' '}
          <a href="#" className="font-semibold text-indigo-300">
            <span aria-hidden="true" className="absolute inset-0" />
            Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-black">Data to enrich</span>
            <span className="text-white"> your online </span>
            <span className="text-black"> business</span>
          </h1>
          <p className="mt-6 px-3 py-3 text-lg leading-8 text-black bg-white rounded-full">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="relative rounded-full px-3 py-1 text-sm leading-6 bg-black text-gray-300 ring-1 ring-gray-300 hover:ring-gray-400"
            >
              Get started
            </a>
            <a href="#" className="relative rounded-full px-3 py-1 text-sm leading-6 bg-black text-gray-300 ring-1 ring-gray-300 hover:ring-gray-400">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-300 hover:ring-gray-400"
        />
      </div>
    </div>
  )
}

export default HeroSection;
