import React from "react";
import Meta from "components/Meta";
import { useState } from "react";
import DashboardSection2 from "components/DashboardSection2";
import Navbar2 from "components/Navbar2";
import Footer from "components/Footer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Chart from "components/Chart"
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PredictionData from "components/predictionData";
import PredictionMeta from "components/predictionMeta"
import { makeStyles } from "@mui/styles";
import { DataGrid, GridToolbarContainer, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Typography, Chip } from "@mui/material";
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Avatar from '@mui/material/Avatar'

const useStyles = makeStyles((theme) => ({
  priceChip: {
    backgroundColor: '#4caf50', // Change this to your desired shade of green
    color: '#fff', // Set the text color to white so it's readable
  },
  gradientText: {
    backgroundClip: "text",
    backgroundImage:
      "linear-gradient(85.9deg, #1EBEA5 -14.21%, #00B5C4 18.25%, #00A8E6 52.49%, #0096FD 81.67%, #157AFB 111.44%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
function DashboardPage(props) {
  const [value, setValue] = useState('all')
  const [searchText, setSearchText] = useState("Frog");
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
   const getFilteredRows = () => {
    if (searchText === "") {
      return rows;
    } else {
      return rows.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
    }
  };
  const rows = [
    { id: 1, prediction: "What is the global temperature in 2022?", category: "climate", consensus: 25, price: 0.98, predictors: 22 },
    { id: 2, prediction: "What is the global temperature in 2022?", category: "finance", consensus: 25, price: 0.98, predictors: 22 },
    { id: 3, prediction: "What is the global temperature in 2022 Frog ?", category: "development", consensus: 25, price: 0.98, predictors: 22 },
    ];
  const classes = useStyles();
  const columns = [
    {
      flex: 0.4,
      minWidth: 100,
      field: 'prediction',
      headerName: 'Prediction',
      renderCell: ({ row }) =>  <Typography onClick={() => console.log('prediction')} variant='body2'>{row.prediction}</Typography>
    },
    {
      flex: 0.2,
      minWidth: 100,
      field: 'category',
      headerName: 'Category',
      renderCell: ({ row }) =>  <Typography variant='body2'>{row.category}</Typography>
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'consensus',
      headerName: 'Consensus',
      renderCell: ({ row }) => (
        <Chip label={`$${row.consensus}`} className={classes.priceChip} />
      )    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'price',
      headerName: 'Consensus Price',
      renderCell: ({ row }) => (
        <Chip
          label={`$${row.price}`}
          color="primary"
          size="small"
          sx={{ fontWeight: "bold" }}
        />
      )    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'predictors',
      headerName: 'Predictors',
      renderCell: ({ row }) =>  <Typography variant='body2'>{row.predictors}</Typography>
    }
  
  ]
  return (

    <> 
      <Meta title="Dashboard" />
      <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          sx={{ textAlign: "center" }}
        />

        
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={12}>
          <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                <div style={{ height: 400, width: "100%" }}>
      <DataGrid 
      columns={columns}
      rows={rows}
components={{ Toolbar: GridToolbar }} 
autoHeight // enable auto-height to ensure all rows are visible

/>

    </div>
         </Box>
              </CardContent>
            </Card>
            </Grid>
                    
              
               
    
          
          </Grid>

          
      </Container>
    </Section>
      
       
   
    </>

    
  );
}

export default DashboardPage;





