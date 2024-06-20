interface FooterListProps {
  children: React.ReactNode;
}
const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div
      className="
        w-full
        sm:w-1/2
        md:w-1/2
        lg:w-1/2
        mb-6
        flex
        flex-col
        gap-2
        footer-layout">
      {children}
    </div>
  );
};
export default FooterList;
