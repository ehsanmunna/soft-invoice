import { Box } from "@mui/material"
import { ICompanyAddress } from "../../interface/invoice/IAddress"
import PageContainer from "../Layout/PageContainer"
import AppSubTitle from "../Typography/SubTitle"
import AppTitle from "../Typography/Title"

const invStyle = {
    display: { display: 'flex' }
    // flow: { flexGrow: 1 },
    // fontWeight: { fontWeight: 700 },
    // date: { fontStyle: "italic", color: '#606060' },
    // amount: { color: '#393939', fontSize: 24, fontWeight: 700 }
}

const InvoiceHead = (props: ICompanyAddress) => {
    return (
        <PageContainer>
            <Box sx={invStyle.display}>
            <Box style={{width: '100%'}}>
                <AppTitle direction="left" name="Invoice"/>
            </Box>
            <Box style={{width: '100%'}}>
                <AppSubTitle name={props.companyName}/>
                <div>{props.addressLine1}</div>
                <div>{props.phone}</div>
                <div>{props.email}</div>
            </Box>
        </Box>
        </PageContainer>
    )
}

export default InvoiceHead