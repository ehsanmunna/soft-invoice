import { Box } from "@mui/material";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppLinkButtonPrimary from "../../components/Actions/PrimaryLinkButton";
import AppButtonSecondary from "../../components/Actions/SecondaryButton";
import AppNumberInput from "../../components/FormElement/NumberInput";
import AppTextInput from "../../components/FormElement/TextInput";
import CustomerInfo from "../../components/Invoice/CustomerInfo";
import InvoiceHead from "../../components/Invoice/InvoiceHead";
import FormBox from "../../components/Layout/FormBox";
import FormContainer from "../../components/Layout/FormContainer";
import PageContainer from "../../components/Layout/PageContainer";

function InvoiceItemPage() {
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
          <CustomerInfo 
            customerName="Customer Name"
            addressLine1="Address line"
            phone="016xxxxxxxx"
            email="caaa@gmail.com"
          />
          <FormContainer
            formHeadLine="Add Item"
            formBody={(
              <>
                <FormBox>
                  <AppTextInput placeholder="item" />
                </FormBox>
                <FormBox>
                  <AppTextInput placeholder="unit price" />
                </FormBox>
                <FormBox>
                  <AppNumberInput placeholder="qty"/>
                </FormBox>
                <FormBox>
                  <AppTextInput placeholder="vat" />
                </FormBox>
                <FormBox>
                  <AppTextInput placeholder="discount" />
                </FormBox>
              </>
            )}
            buttonExtra={(
              <Box sx={{ display: 'flex', gap: 1 }}>
                <AppButtonSecondary btnText="Back" />
                <AppButtonPrimary btnText="add more" />
                <AppLinkButtonPrimary href="/invoice-create" linkText="Save&nbsp;&amp;&nbsp;Next" />
              </Box>
            )}
          />
        </>
      </PageContainer>
    </>
  );
}

export default InvoiceItemPage;
