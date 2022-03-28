import AppButtonRound from "../../components/Actions/RoundButton";
import InvoiceListCard from "../../components/Invoice/InvoiceListCard";
import PageContainer from "../../components/Layout/PageContainer";
import AppSubTitle from "../../components/Typography/SubTitle";
import AppTitle from "../../components/Typography/Title";
import { IInvoice } from "../../interface/invoice/IInvoice";

function HomePage() {

  const today = new Date().toDateString();
  const invoiceList: IInvoice[] = [
    { name: 'XYZ254621', date: today, amount: 250 },
    { name: 'XYZ254623', date: today, amount: 1200 },
    { name: 'XYZ254624', date: today, amount: 750 },
    { name: 'XYZ254625', date: today, amount: 3050 },
    { name: 'XYZ254622', date: today, amount: 1200 },
    { name: 'XYZ254626', date: today, amount: 333.50 },
  ]
  return (
    <>
      <PageContainer>
        <AppTitle name="Welcome to Invoice" />
        <div>
          <AppSubTitle name="Recent Invoice list" />
          <AppButtonRound link="/invoice-customer" linktext="Add" />
        </div>
        {
          invoiceList.map((item, i) => {
            return (
              <div style={{ paddingBottom: 10 }}>
                <InvoiceListCard name={item.name} date={item.date} amount={item.amount} key={i} />
              </div>
            )
          })
        }
      </PageContainer>
    </>
  );
}

export default HomePage;
