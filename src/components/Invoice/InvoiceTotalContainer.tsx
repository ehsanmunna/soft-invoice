import { Box } from "@mui/material"
import { IInvoiceTotalSummery } from "../../interface/invoice/IInvoice"

const InvoiceTotalSummery = (props: IInvoiceTotalSummery) => {
    return (
        <Box style={{ width: '100%' }}>
            <div>Gross Total: {props.grossTotal}</div>
            <div>Discount: {props.discount}</div>
            <div>Net Total: {props.netTotal}</div>
        </Box>
    )
}

export default InvoiceTotalSummery;