import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './Kitchen.module.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  cell1: {
    width: '10%',
  },
  cell2: {
    width: '20%',
  },
  cell3: {
    width: '60%',
  },
});

const Kitchen = () => {
  const classes = useStyles();

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  const [checked6, setChecked6] = useState(false);

  function createData(tableNr, orderNr, order, done) {
    return { tableNr, orderNr, order, done };
  }

  const rows = [
    createData(
      '1',
      '123',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked1}
        onChange={e => setChecked1(e.target.checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checked1 ? styles.active : ''}
      />
    ),
    createData(
      '4',
      '234',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked2}
        onChange={e => setChecked2(e.target.checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checked2 ? styles.active : ''}
      />
    ),
    createData(
      'delivery',
      'ABC245',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked3}
        onChange={e => setChecked3(e.target.checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checked3 ? styles.active : ''}
      />
    ),
    createData(
      '3',
      '567',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked4}
        onChange={e => setChecked4(e.target.checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checked4 ? styles.active : ''}
      />
    ),
    createData(
      'delivery',
      'ABC874',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked5}
        onChange={e => setChecked5(e.target.checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checked5 ? styles.active : ''}
      />
    ),
    createData(
      'delivery',
      'ABC234',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked6}
        onChange={e => setChecked6(e.target.checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={checked6 ? styles.active : ''}
      />
    ),
  ];

  return (
    <div className={styles.component}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customizedTable">
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell1}>
                Table
              </TableCell>
              <TableCell className={classes.cell2} align="left">
                Order number
              </TableCell>
              <TableCell className={classes.cell3} align="left">
                Order details
              </TableCell>
              <TableCell className={classes.cell1} align="center">
                DONE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.orderNr}>
                <TableCell
                  className={styles.tableNr}
                  component="th"
                  scope="row"
                  align="left"
                >
                  {row.tableNr}
                </TableCell>
                <TableCell align="left">{row.orderNr}</TableCell>
                <TableCell align="left">{row.order}</TableCell>
                <TableCell align="center">{row.done}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Kitchen;