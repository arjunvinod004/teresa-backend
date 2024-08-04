const express= require('express');
const nodemon= require('nodemon')
const cors= require('cors');
const { log } = require('console');
const app= express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8000
app.use(cors({
    origin:'http://localhost:8000',
    origin:true,
    methods:["GET","POST","PUT"],
    credentials:true
}))



app.get('/',(req,res)=>{
    res.send(`<h1>hi node</h1>`)
})

// Kyc no

app.get('/kyc',(req,res)=>{
    const {PrmCmpId,PrmBrId}=req.body
    fetch(`https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnGetKycNo?PrmCmpId=${req.query.PrmCmpId}&PrmBrId=${req.query.PrmBrId}`)
    .then((response)=>
        response.json())
        .then((response)=>{
        res.json(response)
      

        }
)
})

app.get('/function',(req,res)=>{
    
    fetch('https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnGetFunctionList')
    .then((response)=>
        response.json())
        .then((response)=>{
        res.json(response)
        // console.log(response);

        })
})

app.get('/material',(req,res)=>{
    const {PrmCmpId,PrmBrId}=req.body
    fetch(`https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnGetProductDressTypeList?PrmCmpId=${req.query.PrmCmpId}&PrmBrId=${req.query.PrmBrId}`)
    .then((response)=>
        response.json())
        .then((response)=>{
        res.json(response)
        // console.log(response);

        })
})

app.get('/country',(req,res)=>{
fetch('https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnGetCountryList')
.then((response)=>
    response.json())
    .then((response)=>{
    res.json(response)
   

    })

})

app.get('/reference',(req,res)=>{
    fetch('https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnGetReffernceList')
    .then((response)=>
        response.json())
        .then((response)=>{
        res.json(response)
   

        })
})

app.get('/shipping',(req,res)=>{
    fetch('https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnGetShippingModeList')
    .then((response)=>
        response.json())
        .then((response)=>{
        res.json(response)
     

        })
})





app.get('/save',(req,res)=>{
    const {PrmCmpId,PrmBrId,PrmName,PrmKycNo,PrmAddress,PrmCAddress,PrmIsIndian, PrmCountryId, PrmIsAbroad,PrmDueDate,PrmMobileNo,PrmPhoneNo,PrmEmail,PrmOccupation,PrmFunctionId,PrmOtherFunction,PrmDressTypeId,PrmDob,PrmContactTime,PrmSecondName,PrmRefferenceId,PrmShippingId}=req.body
 const url=`https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnSaveCustomer?PrmId=0&PrmCmpId=${req.query.PrmCmpId}&PrmBrId=${req.query.PrmBrId}&PrmName=${req.query.PrmName}&PrmKycNo=${req.query.PrmKycNo}&PrmGender=&PrmPAddress=${req.query.PrmAddress}&PrmCAddress=${req.query.PrmCAddress}&PrmIsIndian=${req.query.PrmIsIndian}&PrmCountryId=${req.query.PrmCountryId}&PrmIsAbroad=${req.query.PrmIsAbroad}&PrmDueDate=${req.query.PrmDueDate}&PrmMobNo=${req.query.PrmMobileNo}&PrmPhoneNo=${req.query.PrmPhoneNo}&PrmEmail=${req.query.PrmEmail}&PrmOccupation=${req.query.PrmOccupation}&PrmFunctionId=${req.query.PrmFunctionId}&PrmOtherFunction=${req.query.PrmOtherFunction}&PrmDressTypeId=${req.query.PrmDressTypeId}&PrmDob=${req.query.PrmDob}&PrmProfileImage=&PrmContactTime=${req.query.PrmContactTime}&PrmIsCourier=false&PrmRemarks=&PrmSecondName=${req.query.PrmSecondName}&PrmRefferenceId=${req.query.PrmRefferenceId}&PrmShippingId=${req.query.PrmShippingId}`
 console.log(url);
 
    

    
    fetch(`https://coinoneglobal.in/teresa_trial/WebOnlineCustomer.asmx/FnSaveCustomer?PrmId=0&PrmCmpId=${req.query.PrmCmpId}&PrmBrId=${req.query.PrmBrId}&PrmName=${req.query.PrmName}&PrmKycNo=${req.query.PrmKycNo}&PrmGender=&PrmPAddress=${req.query.PrmAddress}&PrmCAddress=${req.query.PrmCAddress}&PrmIsIndian=${req.query.PrmIsIndian}&PrmCountryId=${req.query.PrmCountryId}&PrmIsAbroad=${req.query.PrmIsAbroad}&PrmDueDate=${req.query.PrmDueDate}&PrmMobNo=${req.query.PrmMobileNo}&PrmPhoneNo=${req.query.PrmPhoneNo}&PrmEmail=${req.query.PrmEmail}&PrmOccupation=${req.query.PrmOccupation}&PrmFunctionId=${req.query.PrmFunctionId}&PrmOtherFunction=${req.query.PrmOtherFunction}&PrmDressTypeId=${req.query.PrmDressTypeId}&PrmDob=${req.query.PrmDob}&PrmProfileImage=&PrmContactTime=${req.query.PrmContactTime}&PrmIsCourier=false&PrmRemarks=&PrmSecondName=${req.query.PrmSecondName}&PrmRefferenceId=${req.query.PrmRefferenceId}&PrmShippingId=${req.query.PrmShippingId}`)

    .then((response)=>
        response.json())
        .then((response)=>{
        res.json(response)
        console.log(response);

        })
        
})

app.listen(port,()=>{
    console.log(`running on ${port}`);
})
