import { Helmet } from "react-helmet";
import AgreementCard from "../../../components/Card/AgreementCard";
import useAgreements from "../../../hooks/useAgreements";

const AgreementRequest = () => {
  const [agreements] = useAgreements();

  return (
    <>
      <Helmet>
        <title>Diamond House | Agreement Request</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 gap-8">
        {agreements?.map((agreement) => (
          <AgreementCard key={agreement._id} agreement={agreement} />
        ))}
      </div>
    </>
  );
};

export default AgreementRequest;
