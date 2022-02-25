import { Box } from "@mui/material"
import ListCard from "../Common/ListCardComponent"


const InvoiceListCard = () => {
    return (
        <ListCard>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <div style={{fontWeight: 700}}>Invoice List Item</div>
                    <div style={{fontStyle: "italic", color: '#606060'}}>27 Dec, 2021</div>
                </Box>
                <Box>
                    <div>250</div>
                </Box>
            </Box>
        </ListCard>

    )
}

export default InvoiceListCard