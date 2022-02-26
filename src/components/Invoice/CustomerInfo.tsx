import { Box } from "@mui/material"
import { ICustomerAddress } from "../../interface/invoice/IAddress"
import AppSubTitle from "../Typography/SubTitle"

const CustomerInfo = (props: ICustomerAddress) => {
    return (
            <Box style={{ width: '100%' }}>
                <AppSubTitle name={props.customerName} />
                <div>{props.addressLine1}</div>
                <div>{props.phone}</div>
                <div>{props.email}</div>
            </Box>
    )
}

export default CustomerInfo;