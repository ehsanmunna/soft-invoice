import { Box } from "@mui/material"
import { IInvoice } from "../../interface/invoice/IInvoice"
import ListCard from "../Common/ListCardComponent"

const invStyle = {
    display: { display: 'flex' },
    flow: { flexGrow: 1 },
    fontWeight: { fontWeight: 700 },
    date: { fontStyle: "italic", color: '#606060' },
    amount: { color: '#393939', fontSize: 24, fontWeight: 700 }
}

const InvoiceListCard = (props: IInvoice) => {
    return (
        <ListCard>
            <Box sx={invStyle.display}>
                <Box sx={invStyle.flow}>
                    <div style={invStyle.fontWeight}>{props.name}</div>
                    <div style={invStyle.date}>{props.date}</div>
                </Box>
                <Box>
                    <div style={invStyle.amount}>
                        {props.amount}
                    </div>
                </Box>
            </Box>
        </ListCard>

    )
}

export default InvoiceListCard