import { Box } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppButtonPrimary from "../../components/Actions/PrimaryButton";
import AppAutocomplete from "../../components/FormElement/Autocomplete";
import AppTextArea from "../../components/FormElement/TextArea";
import AppTextInput from "../../components/FormElement/TextInput";
import InvoiceHead from "../../components/Invoice/InvoiceHead";
import FormBox from "../../components/Layout/FormBox";
import FormContainer from "../../components/Layout/FormContainer";
import PageContainer from "../../components/Layout/PageContainer";

function InvoiceCustomerPage() {
  
  
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
          <FormContainer
            formSubHeadLine="Add customer info."
            formBody={(
              <>
                <FormBox>
                  <AppAutocomplete label="Customer Name" options={[]}/>
                </FormBox>
                <FormBox>
                  <AppTextArea label="Address" />
                </FormBox>
                <FormBox>
                  <AppTextInput placeholder="phone" />
                </FormBox>
                <FormBox>
                  <AppTextInput placeholder="email" />
                </FormBox>
              </>
            )}
            buttonExtra={(
              <Box sx={{ display: 'flex', gap: 5 }}>
                <AppButtonPrimary btnText="Cancle" />
                {/* <AppButtonPrimary onClick={handleOnClick} btnText="Next" /> */}
                <AppButtonPrimary link="/invoice-item" btnText="Next" />
              </Box>
            )}
          />
        </>
      </PageContainer>
    </>
  );
}

export default InvoiceCustomerPage;
