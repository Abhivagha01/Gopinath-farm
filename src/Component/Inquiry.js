import React, { useState } from 'react'
import { Button, FormControl, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { MuiTelInput } from 'mui-tel-input'
import emailjs from '@emailjs/browser';

const Inquiry = () => {
    const [inquiry, setInquiry] = useState({
        Fullname: '',
        mo_Number: '',
        email: '',
        date: null,
    });
    const [errors, setErrors] = useState({
        Fullname: '',
        mo_Number: '',
        email: '',
        date: null,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInquiry((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handlePhoneChange = (newValue) => {
        const formattedValue = newValue.startsWith('+91') ? newValue : '+91' + newValue;
        setInquiry((prevData) => ({
            ...prevData,
            mo_Number: formattedValue
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            mo_Number: ''
        }));
    };
    const validateForm = () => {
        let formIsValid = true;
        if (inquiry.Fullname.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                Fullname: 'First Name is required'
            }));
            formIsValid = false;
        }
        if (inquiry.mo_Number.length < 15) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                mo_Number: 'Mobile number should have at least 10 digits'
            }));
            formIsValid = false;
        }
        if (inquiry.email.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required'
            }));
            formIsValid = false;
        } else {
            const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (!emailRegex.test(inquiry.email.trim())) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: 'Please enter a valid email address with only small letters'
                }));
                formIsValid = false;
            }
        }
        if (inquiry.date) {
            const isValidDob = moment(inquiry.date).isValid();
            if (!isValidDob) {
                setErrors((prevErrors) => ({ ...prevErrors, date: 'Invalid Date' }));
                formIsValid = false;
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, date: '' }));
            }
        }
        return formIsValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const YOUR_SERVICE_ID = 'service_ebfr2rk';
            const YOUR_TEMPLATE_ID = 'template_4oqcwsl';
            const YOUR_PUBLIC_KEY = 'ND8LZ2XyL_4B-BE3Z';

            try {

                const templateParams = {
                    Fullname: inquiry.Fullname,
                    mo_Number: inquiry.mo_Number,
                    email: inquiry.email,
                    date: formatDate(inquiry.date),
                };
                function formatDate(inputDate) {
                    const originalDate = new Date(inputDate);
                
                    const day = originalDate.getDate();
                    const month = originalDate.getMonth() + 1; 
                    const year = originalDate.getFullYear();
                
                    const formattedDay = (day < 10) ? `0${day}` : day;
                    const formattedMonth = (month < 10) ? `0${month}` : month;
                
                    return `${formattedDay}-${formattedMonth}-${year}`;
                }

                console.log('Template Params:', templateParams);

                const response = await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY);
                console.log('Email.js Response:', response);

                if (response.status === 200) {
                    setInquiry({
                        Fullname: '',
                        mo_Number: '',
                        email: '',
                        date: null,
                    });
                } else {
                    console.error('Unexpected response status:', response.status);
                }
            } catch (error) {
                console.error('Error sending email:', error);
            }
        } else {
            console.log('Form is invalid');
        }
    };


    return (
        <>
            <div className="form-outer">
                <div className="container">
                    <form action="" onSubmit={handleSubmit}>
                        <FormControl
                            sx={{
                                m: 1,
                                p: 0,
                                minWidth: 120,
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#85a833'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#85a833'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#85a833',
                                        borderWidth: '1px'
                                    }
                                },
                                size: 'small'
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid xl={12} lg={12} md={12} sm={12} xs={12} sx={{ marginBottom: '18px' }}>
                                    <TextField
                                        label="Full Name"
                                        name="Fullname"
                                        variant="outlined"
                                        value={inquiry.Fullname}
                                        error={!!errors.Fullname}
                                        size="small"
                                        helperText={errors.Fullname}
                                        onChange={handleInputChange}
                                        fullWidth
                                        InputLabelProps={{
                                            style: { color: '#85a833' }
                                        }}
                                    />
                                </Grid>
                                <Grid xl={12} lg={12} md={12} sm={12} xs={12} sx={{ marginBottom: '18px' }}>
                                    <MuiTelInput
                                        id="outlined-basic"
                                        label="Mobile No"
                                        name="mo_Number"
                                        variant="outlined"
                                        size="small"
                                        onChange={handlePhoneChange}
                                        value={inquiry.mo_Number}
                                        defaultCountry="IN"
                                        disableDropdown
                                        error={!!errors.mo_Number}
                                        helperText={errors.mo_Number}
                                        inputProps={{ maxLength: 15 }}
                                        fullWidth
                                        InputLabelProps={{
                                            style: { color: '#85a833' }
                                        }}
                                    />
                                </Grid>
                                <Grid xl={12} lg={12} md={12} sm={12} xs={12} sx={{ marginBottom: '18px' }}>
                                    <TextField
                                        label="Email id"
                                        name="email"
                                        variant="outlined"
                                        size="small"
                                        value={inquiry.email}
                                        onChange={handleInputChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        fullWidth
                                        InputLabelProps={{
                                            style: { color: '#85a833' }
                                        }}
                                    />
                                </Grid>
                                <Grid xl={12} lg={12} md={12} sm={12} xs={12} sx={{ marginBottom: '18px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker
                                            InputLabelProps={{
                                                style: { color: '#85a833' }
                                            }}
                                            name="date"
                                            fullWidth
                                            label="Date"
                                            size="small"
                                            value={inquiry.date}
                                            onChange={(newValue) => setInquiry({ ...inquiry, date: newValue })}
                                            renderInput={(startProps, endProps) => (
                                                <>
                                                    <TextField {...startProps} helperText={errors.date} />
                                                    <TextField {...endProps} />
                                                </>
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Grid item >
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: '#85a833' }}
                                            type="submit"
                                            fullWidth
                                            disabled={
                                                inquiry.Fullname.trim() === '' ||
                                                inquiry.mo_Number.trim() === '' ||
                                                inquiry.email.trim() === '' ||
                                                inquiry.date === null
                                            }
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Inquiry;
