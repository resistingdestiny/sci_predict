import React from "react";
import Meta from "components/Meta";
import DashboardSection2 from "components/DashboardSection2";
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
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, defs, linearGradient, stop  } from 'recharts';
import VotingComponent from "components/voting";
import Typography from "@mui/material/Typography";
import EnhancedTable from "components/Table"
import ColorTabs from "components/TabSection"
function DashboardPage(props) {
  const options = ["Option A", "Option B", "Option C"];
  const data = [
    {
      name: '2018',
      temperature: 4
     
    },
    {
      name: '2019',
      temperature: 2
    },
    {
      name: '2020',
      temperature: 1
    },
    {
      name: '2021',
      temperature: 2
    },
    {
      name: '2022',
      temperature: 3
    },
    {
      name: '2023',
      temperature: 4
     
    },
    {
      name: '2024',
      temperature: 5
    
    },
  ];
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
          <Grid item={true} xs={12} md={8}>
          <Card>
              <CardContent sx={{ padding: 3 }}>
                <Box>
                  <h4 sx={{ textAlign: "left" }}>What will be the average global temperature in 2042?</h4>
                
                      <ComposedChart
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
                         <defs>
                         <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
  <stop offset="0%" stopColor="#1EBEA5"/>
  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)"/>
</linearGradient>
        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend legendType="line"/>
                        <Area tooltipType="none" legendType="none" type="monotone" dataKey="temperature" stroke={false} strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                        <Line type="monotone" dataKey="temperature" activeDot={{ r: 8 }} stroke="#1EBEA5" strokeWidth={3} />
                      </ComposedChart>
              
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={12} md={4}>
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
                <VotingComponent options={options} />
              
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
                  <ColorTabs />
              
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
      
       
   
    </>

    
  );
}

export default DashboardPage;
