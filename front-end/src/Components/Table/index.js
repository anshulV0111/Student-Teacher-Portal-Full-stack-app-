/* eslint-disable max-len */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'
import style from './indexStyles.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  search: {
    width: '220px',
    color: 'red',
    marginLeft: '1400px',
  },
  theadStyle: {
    backgroundColor: '#acb0ab',
    fontWeight: '700',
  },
  buttonStyle: {
    marginLeft: '800px',
    padding: '20px',
  },
  buttonS: {
    marginLeft: '50px',
    padding: '20px',
  },
  selectRows: {
    marginLeft: '20px',
    color: '#fefaff',
    margin: theme.spacing(1),
  },
  container: {
    backgroundColor: '#fefaff',
    marginTop: '120px',
  },
  formControl: {
    margin: '10px',
    marginTop: '100px',
  },
}))

const TableComponent = ({
  row, header, handlePrev, handleNext, handleChangeRowsPerPage, page,
  rowsPerPage, order, orderBy, handleOrderByChange, handleOrderChange,
  orderByMap, minAtten, maxAtten, minMarks, maxMarks, handleMinAtten, handleMaxAtten, handleMinMarks, handleMaxMarks,
}) => {
  const classes = useStyles()
  let error
  if (minMarks > maxMarks || minAtten > maxAtten) error = true
  return (
    <Paper className={ style.container }>
      <Toolbar>
        <FormControl className={ classes.formControl }>
          <InputLabel id='demo-simple-select-label'>Order</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={ orderBy }
            onChange={ handleOrderChange }
          >
            <MenuItem value='asc'>Ascending</MenuItem>
            <MenuItem value='desc'>Descending</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={ classes.formControl }>
          <InputLabel id='demo-simple-select-label'>OrderBy</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={ order }
            onChange={ handleOrderByChange }
          >
            { orderByMap.map((item) => <MenuItem key={ item } value={ item }>{ item }</MenuItem>)}
          </Select>
        </FormControl>
        {
          error
            ? <Alert severity='error'>Min Value is greater than Max value</Alert>
            : <></>
        }
        <FormControl className={ style.textContainer }>
          {
             minAtten !== undefined
               ? (
                 <>
                   <TextField
                     variant='outlined'
                     required
                     fullWidth
                     id='lastName'
                     label='min attendance'
                     name={ minAtten }
                     onChange={ handleMinAtten }
                     value={ minAtten }
                     className={ style.field1 }
                   />
                   <TextField
                     variant='outlined'
                     required
                     fullWidth
                     id='lastName'
                     label='max attendance'
                     name={ maxAtten }
                     onChange={ handleMaxAtten }
                     value={ maxAtten }
                     className={ style.field2 }

                   />
                 </>
               )
               : <></>
          }
          {
            minMarks !== undefined
              ? (
                <>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='minMarks'
                    label='min marks'
                    name={ minMarks }
                    onChange={ handleMinMarks }
                    value={ minMarks }
                    className={ style.field3 }

                  />
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    label='max marks'
                    name={ maxMarks }
                    onChange={ handleMaxMarks }
                    value={ maxMarks }
                    className={ style.field4 }

                  />
                </>
              )
              : <></>
          }
        </FormControl>
      </Toolbar>
      <TableContainer component={ Paper } size='small'>
        <Table aria-label='simple table' className={ style.table }>
          <TableHead>
            <TableRow className={ classes.theadStyle }>
              { header.map((head) => (
                <TableCell key={ header.label }>
                  {head.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {// stableSort(filterFn.fn(row), getComparator(order, orderBy))
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              row.map((rows) => (
                <TableRow
                  key={ rows }
                >
                  {header.map((head) => (
                    <TableCell key={ head.value }>
                      {rows[ head.value ]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={ classes.buttonStyle }>
        <Box>
          <Button onClick={ handlePrev } variant='contained' color='primary' disabled={ page <= 0 }>Prev</Button>
          <Button onClick={ handleNext } variant='contained' color='primary' disabled={ row.length % rowsPerPage !== 0 || row.length === 0 }>Next</Button>
        </Box>
        <Box className={ classes.selectRows }>
          <InputLabel>Select Rows</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={ rowsPerPage }
            onChange={ handleChangeRowsPerPage }
          >
            <MenuItem value={ 2 }>2</MenuItem>
            <MenuItem value={ 3 }>3</MenuItem>
            <MenuItem value={ 5 }>5</MenuItem>
            <MenuItem value={ 10 }>10</MenuItem>
            <MenuItem value={ 15 }>15</MenuItem>
            <MenuItem value={ 20 }>20</MenuItem>
          </Select>
        </Box>
      </Box>
    </Paper>
  )
}

TableComponent.propTypes = {
  row: PropTypes.isRequired,
  header: PropTypes.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  page: PropTypes.isRequired,
  rowsPerPage: PropTypes.isRequired,
  order: PropTypes.isRequired,
  orderBy: PropTypes.isRequired,
  handleOrderByChange: PropTypes.func.isRequired,
  handleOrderChange: PropTypes.func.isRequired,
  orderByMap: PropTypes.isRequired,
  minAtten: PropTypes.isRequired,
  maxAtten: PropTypes.isRequired,
  minMarks: PropTypes.isRequired,
  maxMarks: PropTypes.isRequired,
  handleMinAtten: PropTypes.func.isRequired,
  handleMaxAtten: PropTypes.func.isRequired,
  handleMinMarks: PropTypes.func.isRequired,
  handleMaxMarks: PropTypes.func.isRequired,
}

export default TableComponent
