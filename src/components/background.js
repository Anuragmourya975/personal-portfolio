const Background = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <body className=" dark:bg-black bg-gray-700 transition-all">
      {children}
    </body>
  );
};

export default Background;
