import { Box } from "@mui/material";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppTable from "../../components/Common/Table";
import AppNumberInput from "../../components/FormElement/NumberInput";
import AppTextInput from "../../components/FormElement/TextInput";
import CustomerInfo from "../../components/Invoice/CustomerInfo";
import InvoiceHead from "../../components/Invoice/InvoiceHead";
import InvoiceTotalSummery from "../../components/Invoice/InvoiceTotalContainer";
import FormBox from "../../components/Layout/FormBox";
import FormContainer from "../../components/Layout/FormContainer";
import PageContainer from "../../components/Layout/PageContainer";
import AppTableContainer from "../../components/Layout/TableContainer";

function InvoiceCreatePage() {
  
  return (
    <>
      <PageContainer>
        <>
          <InvoiceHead 
            companyName="Company Name"
            addressLine1="Address line"
            phone="017xxxxxxxx"
            email="aaa@gmail.com"
          />
          <Box>
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
          <Box>
            <Box></Box>
            <Box>
              <InvoiceTotalSummery grossTotal={500} discount={50} netTotal={450}/>
            </Box>
          </Box>
        </>
      </PageContainer>
    </>
  );
}

export default InvoiceCreatePage;
