const express = require('express');

const app = express();
const SECRET_KEY = 'sk_test_51JhYvuSIor8TYZa3zSURjX3mE2YohNW8Mr1vON1OXCLOfRlk88vZy5PJVcLwklFZAOEbOzdmqj7KwHflxbPr7ZCH00FyGPHYzX'

const mongoose = require('mongoose');

const path = require('path')

const stripe = require('stripe')(SECRET_KEY);

const PUBLISHABLE_KEY = 'pk_test_51JhYvuSIor8TYZa3SUi0VhV3xMudmNWLYyYjYkDVzNfk9bErFGzu4dRIc0OsJu8PjxBm8YL4mmOH1yYsLeI4EccQ00pNO0U2hG'

const ejs = require('ejs')

const bodyParser = require('body-parser')

const PORT = 5000;

app.use(bodyParser.urlencoded({urlencoded:false}))

app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{

    res.render('home',{
        key:PUBLISHABLE_KEY
    })
})

app.post('/payment', (req,res)=>{
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name:"Gulshan Khandale",
        address:{
            line1:"Ashirwad Nagar Nagpur",
            postal_code:"440024",
            city:"Nagpur",
            state:"Maharashtra",
            country:"India"
        }
        .then((customer)=>{
            return stripe.charges.create({
                amount:'7000',
                description:"Web Developmemt Product",
                currency:'inr',
                customer: customer.id
            })
        .then((charge)=>{
                console.log(charge)
                res.send('Success')
            })
        .catch((err)=>{
                res.send(err)
            })

        })

    })
})

app.listen(PORT, ()=>{

    console.log(`port is started on ${PORT}`)
})