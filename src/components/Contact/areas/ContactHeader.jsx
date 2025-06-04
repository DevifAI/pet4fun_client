import Breadcrumb from "../../Breadcrumb";

const ContactHeader = () => {
  return (
    <Breadcrumb
      title="Contact Page"
      breadcrumbItems={[{ label: "Home", link: "/" }, { label: "Contact" }]}
    />
  );
};

export default ContactHeader;
