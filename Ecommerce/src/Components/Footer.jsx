

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4"> {/* Changed py-8 to py-4 */}
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Saurabh Farswan Xcdify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
