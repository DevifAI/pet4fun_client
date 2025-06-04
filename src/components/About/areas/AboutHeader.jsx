import Breadcrumb from "../../Breadcrumb";

const AboutHeader = () => {
  return (
    <Breadcrumb
      title="About Us"
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "About Us" },
      ]}
    />
  );
};

export default AboutHeader;
