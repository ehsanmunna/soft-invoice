import InvoiceListCard from "../../components/Invoice/InvoiceListCard";
import PageContainer from "../../components/Layout/PageContainer";
import AppTitle from "../../components/Typography/Title";
import { IInvoice } from "../../interface/invoice/IInvoice";

function HomePage() {
  
  const today = new Date().toDateString();
  const invoiceList: IInvoice[] = [
    { name: 'XYZ254621', date: today, amount: 250},
    { name: 'XYZ254621', date: today, amount: 1200},
    { name: 'XYZ254621', date: today, amount: 750},
    { name: 'XYZ254621', date: today, amount: 3050},
    { name: 'XYZ254621', date: today, amount: 1200},
    { name: 'XYZ254621', date: today, amount: 333.50},
  ]
  return (
    <>
      <PageContainer>
        <AppTitle name="Welcome to Invoice"/>
        {
          invoiceList.map(item=>{
            return (
              <div style={{paddingBottom: 10}}>
              <InvoiceListCard name={item.name} date={item.date} amount={item.amount}/>
            </div>
            )
          })
        }
      </PageContainer>
    </>
  );
}

export default HomePage;
