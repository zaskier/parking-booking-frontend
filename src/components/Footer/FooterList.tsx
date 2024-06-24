interface FooterListProps {
  children: React.ReactNode;
}
const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div className="footer-layout mb-6 flex w-full flex-col gap-2 sm:w-1/2 md:w-1/2 lg:w-1/2">
      {children}
    </div>
  );
};
export default FooterList;
