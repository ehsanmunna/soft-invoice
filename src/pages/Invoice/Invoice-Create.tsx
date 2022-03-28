import { Box } from "@mui/material";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppButtonSecondary from "../../components/Actions/SecondaryButton";
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

function InvoiceCreatePage() {
  
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
          <AppTableContainer subtitle="Selected Items">
            <AppTable/>
          </AppTableContainer>
          <Box style={{display: 'flex', justifyContent: 'space-between', ..._paddingBottom}}>
            <Box>
              <AppTextArea label="Note"/>
            </Box>
            <Box>
              <InvoiceTotalSummery grossTotal={500} discount={50} netTotal={450}/>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <AppButtonSecondary btnText="Back" />
            <AppButtonPrimary link="/invoice-print" btnText="create invoice" />
          </Box>
        </>
      {/* </PageContainer> */}
    </>
  );
}

export default InvoiceCreatePage;
