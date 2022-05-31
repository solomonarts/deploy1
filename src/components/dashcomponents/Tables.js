import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';

const Tables = (props) => {

    const [clients, SetClients] = React.useState(props.clients)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'orange',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <Container>
            <Row>
                <Col>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">User Name</StyledTableCell>
                                    <StyledTableCell align="center">Address</StyledTableCell>
                                    <StyledTableCell align="center">Email</StyledTableCell>
                                    <StyledTableCell align="center">Tel.number</StyledTableCell>
                                    <StyledTableCell align="center">Company Name</StyledTableCell>
                                    <StyledTableCell align="center">Joined</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {clients && clients.length > 0 ? clients.map((client, c_ind) => <StyledTableRow>
                                    <StyledTableCell align="center" component="th" scope="row" key={c_ind}>
                                        <Typography>
                                            {client.username}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Typography>
                                            {client.physical_address}
                                        </Typography>

                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Typography>
                                            {client.email_address}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Typography>
                                            {client.tel_number}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Typography>
                                            {client.company_name}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Typography>
                                            {client.date_created}
                                        </Typography>
                                    </StyledTableCell>
                                </StyledTableRow>) : "No Clients yet"}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>



    )
}

export default Tables;