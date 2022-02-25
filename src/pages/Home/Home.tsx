import InvoiceListCard from "../../components/Invoice/InvoiceListCard";
import PageContainer from "../../components/Layout/PageContainer";
import AppTitle from "../../components/Typography/Title";

function HomePage() {
  return (
    <>
      <PageContainer>
        <AppTitle name="Welcome to Invoice"/>
        <div>
          <InvoiceListCard/>
        </div>
      </PageContainer>
    </>
  );
}

export default HomePage;
