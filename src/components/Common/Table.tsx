import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const AppTable = (data: any) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell>SL</TableCell>
                    <TableCell>U. Price</TableCell>
                    <TableCell>qty</TableCell>
                    <TableCell>discount</TableCell>
                    <TableCell>total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>SL</TableCell>
                    <TableCell>Items</TableCell>
                    <TableCell>U. Price</TableCell>
                    <TableCell>qty</TableCell>
                    <TableCell>discount</TableCell>
                    <TableCell>total</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);

export default AppTable