const data = [
  {
    title: "Frontend",
    content: "ReactJS , TailwindCSS",
  },
  {
    title: "Backend",
    content: "ExpressJS , NodeJS ",
  },
  {
    title: "Storage",
    content: "MongoDB , Firebase (Video Storage) ",
  },
  // Add more objects as needed
];

const Information = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl items-center justify-center mx-auto space-y-8">
      <h1 className="text-4xl md:text-7xl font-poppins text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 font-poppins  font-bold text-center ">
        Hello there! I&apos;m Harsh.
      </h1>
      <p className="text-lg font-poppins text-center text-zinc-300 max-w-4xl">
        I&apos;m thrilled about our first interaction. I sincerely appreciate
        the opportunity you&apos;ve provided, as it has been incredibly
        enlightening. I&apos;ve gained valuable insights and learned a lot of
        new things. I hope you find our exchange equally enjoyable! :)
      </p>
      <p className="text-lg font-poppins text-center text-zinc-300 max-w-4xl mt-6">
        Ran into some issues as well :/ Hope we can discuss about the them.
      </p>
      <div className="grid-cols-1 md:grid-cols-3 space-y-6 font-poppins text-center ">
        {data.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.content}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Information;
