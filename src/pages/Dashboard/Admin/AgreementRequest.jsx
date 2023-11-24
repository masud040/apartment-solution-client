import AgreementCard from "../../../components/Card/AgreementCard";
import useAgreements from "../../../hooks/useAgreements";

const AgreementRequest = () => {
  const [agreements] = useAgreements();

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {agreements?.map((agreement) => (
        <AgreementCard key={agreement._id} agreement={agreement} />
      ))}
    </div>
  );
};

export default AgreementRequest;
