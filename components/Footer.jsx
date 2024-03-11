const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="m-2 mt-9 footer">
      <div className="text-blue-500  px-2 py-2 border-t-2 w-full text-center">
        ANJESH CYBER CAFE MYORPUR @{currentYear}
      </div>
    </div>
  );
};

export default Footer;
