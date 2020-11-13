import React ,{useEffect , useState, Fragment}from "react";
import { csv } from 'd3';
import { Form } from "react-bootstrap";
import dataex from './Problem Statement GITAM.csv';
import { useTable } from "react-table";
import GetStatement from "./GetStatement";
// import 'reactjs-popup/dist/index.css'
import './Problem.css'
const ProblemStatements=()=>{
  var [probl,setProb]=useState([])
  
      
      useEffect(()=>{

csv(dataex).then(data=>{
  console.log(probl)
  var prob= data;
  setProb(prob);
  
})

},[])
console.log(probl)
const TableCell = ({ value }) => (
  <div>
    <p>{value}</p>
  </div>
)
  
      
     

      const data = React.useMemo(
        () => {return probl.map((item,index)=>{
          return(
            {
              sno:index+1,
              domain:item["DOMAIN"],
              ps:item["PROBLEM STATEMENTS"],
              ps_code:item["PS CODE"],
              ps_title:item["PS TITLE"]    
          }
          )
                })},
        [probl]
      )
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'S.NO',
            accessor: 'sno', // accessor is the "key" in the data
            Cell: TableCell
          },
          {
            Header: 'CODE ',
            accessor: 'ps_code', // accessor is the "key" in the data
            Cell: TableCell
          },
          {
            Header: 'DOMAIN',
            accessor: 'domain',
            Cell: TableCell
          },
           {
            Header: 'TITLE ',
            accessor: 'ps_title', // accessor is the "key" in the data
            Cell: TableCell
          },
          {
            Header: 'PROBLEM STATEMENT',
            accessor: 'ps', // accessor is the "key" in the data
            Cell: GetStatement
          },
         
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      return (
        <Fragment>
          <h1 className="h1"> PROBLEM STATEMENTS</h1>
          <Form className="form">
          <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select">
      <option>ALL</option>
      <option>Mobile App Development</option>
      <option>WEB APPLICATION</option>
      <option>Smart Technologies</option>
      <option>MISCELLANEOUS</option>
    </Form.Control>
  </Form.Group>
  
  
  
</Form>
        <table {...getTableProps()} style={{ border: 'solid 1px blue', width:"auto" }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                       
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        </Fragment>
      )
    
    

}
export default ProblemStatements