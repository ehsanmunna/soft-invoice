import { Box } from "@mui/material";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppTable from "../../components/Common/Table";
import AppTextArea from "../../components/FormElement/TextArea";
import CustomerInfo from "../../components/Invoice/CustomerInfo";
import InvoiceHead from "../../components/Invoice/InvoiceHead";
import InvoiceTotalSummery from "../../components/Invoice/InvoiceTotalContainer";
import PageContainer from "../../components/Layout/PageContainer";
import AppTableContainer from "../../components/Layout/TableContainer";

const _paddingBottom = {
  paddingBottom: 10
};

function InvoicePrintPage() {
  
  return (
    <>
      {/* <PageContainer> */}
        <>
        <Box style={{paddingBottom: 20}}>
          <InvoiceHead 
            companyName="Company Name"
            addressLine1="Address line"
            phone="017xxxxxxxx"
            email="aaa@gmail.com"
          />
          </Box>
          <Box style={{display: 'flex', justifyContent: 'space-between', ..._paddingBottom}}>
            <Box>
              <CustomerInfo 
                customerName="Customer Name"
                addressLine1="Address line"
                phone="016xxxxxxxx"
                email="caaa@gmail.com"
              />
            </Box>
            <Box>
              <div>Order No#</div>
              <div>Date:</div>
            </Box>
          </Box>
          <AppTableContainer subtitle="Items">
            <AppTable/>
          </AppTableContainer>
          <Box style={{display: 'flex', justifyContent: 'space-between', ..._paddingBottom}}>
            <Box>
              Invoice Note
            </Box>
            <Box>
              <InvoiceTotalSummery grossTotal={500} discount={50} netTotal={450}/>
            </Box>
          </Box>
          <Box>
            <AppButtonPrimary btnText="Print" />
          </Box>
        </>
      {/* </PageContainer> */}
    </>
  );
}

export default InvoicePrintPage;
