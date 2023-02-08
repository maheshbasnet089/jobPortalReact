import React, { useState } from "react";
import CareerEditor from "./CareerEditor";

const CV = () => {



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        designation: '',
        phone_number: '',
        location: '',
        career_objective: '',
        workHistory: ''
    })
    const [formError, setFormError] = useState({

    })

    const [workForm, setWorkForm] = useState({
        designation: '',
        company_name: '',
        start_date: '',
        end_date: '',
        Key_responsibilities: ''
    })
    const [workArr, setWorkArr] = useState([])

    console.log(workArr)

    const [error, setError] = useState({})


    const handleChange = (e) => {
        let { name, value } = e.target;
        setWorkForm({ ...workForm, [name]: value })
    }



    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };



    const handleWork = (e) => {
        e.preventDefault()
        let x = Validate(workForm);
        setError(x);
        if (Object.keys(x).length === 0) {
            let arr = [...workArr]
            arr.push(workForm)
            setWorkArr(arr)
            alert('success')
        } else {
            console.log('error')
        }
    }


    const Validate = (e) => {
        const errors = {}
        if (!e.designation) {
            errors.designation = 'designation is required'
        }
        if (!e.company_name) {
            errors.company_name = 'company name is required'
        }
        if (!e.start_date) {
            errors.start_date = 'start date is required'
        }
        if (!e.end_date) {
            errors.end_date = 'end date is required'
        }
        if (!e.Key_responsibilities) {
            errors.Key_responsibilities = 'key responsibilities is required'
        }
        return errors;
    }


    const FormValidate = (eForm) => {
        const errors = {}
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!eForm.name) {
            errors.name = 'name is required'
        }
        if (!eForm.email) {
            errors.email = 'email  is required'
        } else if (!regex.test(eForm.email)) {
            errors.email = 'email format doesnot match'
        }
        if (!eForm.phone_number) {
            errors.phone_number = 'phone_number is required'
        }
        if (!eForm.location) {
            errors.location = 'location is required'
        }
        if (!eForm.designation) {
            errors.designation = 'designation is required'
        }
        if (!eForm.career_objective) {
            errors.career_objective = 'career_objective is required'
        }
        return errors;
    }

    const onChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        let formData = {
            name: data.get('name'),
            email: data.get('email'),
            designation: data.get('designation'),
            location: data.get('location'),
            phone_number: data.get('phone_number'),
            career_objective: inputValue,
            workHistory: workArr
        }
        console.log(formData);
        let Validate = FormValidate(formData)
        setFormError(Validate)
        if (Object.keys(Validate).length === 0) {
            alert('success')
        } else {
            console.log(error)
        }
    }

    return (
        <div className="pt-10">
            <div className="w-[80%] m-auto shadow-2xl p-8" >
                <h1 className="text-center">Generate CV</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => onChange(e)}
                            id='name'
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Full Name
                        </label>
                        <p className="text-sm text-red-700">{formError.name}</p>

                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={(e) => onChange(e)}
                            id='email'
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        <p className="text-sm text-red-700">{formError.email}</p>

                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={(e) => onChange(e)}
                            id='Fdesignation'
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "

                        />
                        <label
                            htmlFor="Fdesignation"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Designation
                        </label>
                        <p className="text-sm text-red-700">{formError.designation}</p>

                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={(e) => onChange(e)}
                                id='phone_number'
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "

                            />
                            <label
                                htmlFor="phone_number"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone Number
                            </label>
                            <p className="text-sm text-red-700">{formError.phone_number}</p>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={(e) => onChange(e)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "

                            />
                            <label
                                htmlFor="location"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Location
                            </label>
                            <p className="text-sm text-red-700">{formError.location}</p>

                        </div>
                    </div>
                    <div>
                        <h3>Carreer objective</h3>
                        <CareerEditor handleInputChange={handleInputChange} />
                    </div>
                    <div>
                        <h3>Work History</h3>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    name="designation"
                                    value={workForm.designation}
                                    onChange={(e) => handleChange(e)}
                                    id='designation'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="designation"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Designation
                                </label>
                                <p className="text-sm text-red-700">{error.designation}</p>

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    name="company_name"
                                    value={workForm.company_name}
                                    onChange={(e) => handleChange(e)}
                                    id='company_name'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    for="company_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Company Name
                                </label>
                                <p className="text-sm text-red-700">{error.company_name}</p>

                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="date"
                                    name="start_date"
                                    value={workForm.start_date}
                                    onChange={(e) => handleChange(e)}
                                    id='start_date'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "

                                />
                                <label
                                    htmlFor="start_date"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Start date
                                </label>
                                <p className="text-sm text-red-700">{error.start_date}</p>

                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="date"
                                    name="end_date"
                                    value={workForm.end_date}
                                    onChange={(e) => handleChange(e)}
                                    id='end_date'
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="end_date"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    End Date
                                </label>
                                <p className="text-sm text-red-700">{error.end_date}</p>
                            </div>
                        </div>
                        <div className=" py-2 bg-white rounded-b-lg dark:bg-gray-800">
                            <label
                            >
                                key responsibilites
                            </label>
                            <textarea
                                name="Key_responsibilities"
                                value={workForm.Key_responsibilities}
                                onChange={(e) => handleChange(e)}

                                rows="4"
                                className="block w-full px-0 text-sm text-gray-800 bg-white border-0 border-b-2 border-gray-300  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="key responsibilites..."
                            ></textarea>
                            <p className="text-sm text-red-700">{error.Key_responsibilities}</p>

                        </div>
                        <button onClick={(e) => handleWork(e)} className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Add Work history</button>


                        {workArr?.map((w, index) => {
                            return (
                                <div className="pb-10 pt-10" key={index}>
                                    <div className='border-b pb-8'>
                                        <p>{w.designation} @{w.company_name}</p>
                                        <p>
                                            {w.start_date}- {w.end_date}</p>
                                        <p className='text-sm'>
                                            {w.Key_responsibilities}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>



                    <div className="pt-8">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CV;
