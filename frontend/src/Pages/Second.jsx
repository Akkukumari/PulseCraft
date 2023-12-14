import React from 'react'
import "./All.css";
// import Tab from "./Tab";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Second() {
  return (
    <>
    <div className='secondbody'> 

       <div className='firstbody'>
        <h1 className='firsttext'>DIGITAL TRANSFORMATION SERVICES</h1>
        <h5 className='sectext'>FIND OUT WHICH DIGITAL SERVICES ARE RIGHT FOR YOUR BUSINESS</h5>
       </div>

       <div className='thirdbody'>
         
         <div className='sectab'>      
         <Tabs>
            <TabList >
              <Tab>STRATEGY</Tab>
              <Tab>TECHNOLOGY</Tab>
              <Tab>MANAGED SERVICES</Tab>
               </TabList>
       </Tabs>
         </div>

         
        <div className='thirdsec'>
        <h5 className='thirdtext'> Leading organizations are embracing digital transformation strategies centered around reimagining their products and services, rethinking the customer experience, reinventing employee productivity, and refining operations to drive efficiency. Our experts bring countless years of experience advising some of the world’s largest enterprises & government entities. Much more than just a planning partner, we can move from strategy into implementation with equal expertise.</h5>
        

        <div className='forthsec'>
        <div>
            <ul className='firstli'>
                <li>The Experience Group</li>
                <li>CX Strategy & Design</li>
                <li>Brand Marketing</li>
            </ul>
        </div>

        <div>
            <ul className='firstli'>
                <li>Commerce Strategy</li>
                <li>Connected Vehicle Strategy</li>
                <li>Product Strategy & Design</li>
            </ul>
        </div>

        <div>
            <ul className='firstli'>
                <li>Data Strategy & Consulting</li>
                <li>Cyber Risk Management</li>
            </ul>
        </div>
        </div>

        </div>

       </div>

       <button className='connect'>CONNECT</button>
    </div>
        
    </>
  )
}
