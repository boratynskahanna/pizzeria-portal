import React from 'react';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard View</h2>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Link to="/tables">Tables</Link>
          </TableCell>
          <TableCell>
            <Link to="/waiter">Waiter</Link>
          </TableCell>
          <TableCell>
            <Link to="/kitchen">Kitchen</Link>

          </TableCell>
        </TableRow>
      </TableHead>
    </Table>  
  </div>
);

export default Dashboard;

