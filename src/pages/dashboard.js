import React from "react";
import Meta from "components/Meta";
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

function DashboardPage(props) {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <> <Navbar2
    color="default"
    logo=""
    logoInverted=""
  />
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
          <Grid item={true} xs={12} md={7}>
          <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                <SectionHeader
          title= "What will be the average global temperature in 2042?"
          subtitle= ""
          size={8}
          sx={{ textAlign: "left" }}
        />
                      <LineChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
              
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={12} md={5}>
            <Grid item mb={4}> 
            <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                  
              
                </Box>
              </CardContent>
            </Card>
            </Grid>
            <Grid item mb={4}> 
            <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                  
              
                </Box>
              </CardContent>
            </Card>
            </Grid>
            <Grid item mb={4}> 
            <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                  
              
                </Box>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
          <Grid item={true} xs={12} md={12}>
            <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                  
              
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={12} md={12}>
            <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                  
              
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Section>
      
        <Footer
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo=""
        logoInverted=""
        sticky={false}
      />
   
    </>

    
  );
}

export default DashboardPage;
