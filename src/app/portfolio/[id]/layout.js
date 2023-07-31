import Nav from "@/app/components/Nav";

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default PortfolioLayout;
