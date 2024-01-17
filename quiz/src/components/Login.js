import React from 'react'
import {TextField, Typography} from '@mui/material'
import  {Button} from '@mui/material'
import  {Box,Card, CardContent} from '@mui/material'
import Center from './Center'
import useForm from '../hooks/useForm'

const getFreshModel=()=>({
    name:'',
    email:''
})
function Login() {
    const{
        values,
         //setValues,
         errors,
         setErrors,
        handleInputChange
    }=useForm(getFreshModel);
    const login= e=>{
        e.preventDefault();
        if (validate())
    {
        console.log(values)
    }
    }
    const validate = () => {
      let temp = {}
      temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
      temp.name = values.name !== "" ? "" : "This field is required."
      setErrors(temp)
      return Object.values(temp).every(x => x === "")
    }

  return (
    <Center>
          <Card sx={{width:400}}>
        <CardContent sx={{textAlign: 'center'}}>
            <Typography varient="h3" sx={{my :3}}>
             Quiz App
            </Typography>
        <Box sx={{
     '& .MuiTextField-root':{
        margin:1,
        width:'90%'
     }
    }}>
    <form noValidate autoComplete='off' onSubmit={login}>
      <TextField id="outlined-basic" name="email" value={values.email} onChange={handleInputChange}label="Email" variant="outlined"                              
         {...(errors.email && { error: true, helperText: errors.email })} />

      <TextField id="outlined-basic" name="name"  value={values.name} onChange={handleInputChange} label="Name" variant="outlined" 
          {...(errors.name && { error: true, helperText: errors.name })} />
      <Button type="submit" color='primary' size="large"  variant="Submit" sx={{backgroundColor: 'blue',width:'90%'}}>Submit</Button>

    </form>
    </Box>
        </CardContent>
    </Card>
    </Center>
   
    
  )
}

export default Login