import React from 'react'

const ApplyModal = ({ showModal, setShowModal }) => {

    return (
        <>
            <button
                className="middle none center rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Apply now
            </button>
            {
                showModal ? (
                    <>
                        <div className="flex justify-center bg-gray-300 bg-opacity-80  items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">



                            <div className={showModal ? "relative shadow dark:bg-gray-700" : " "}>
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h3 className="text-3xl font=semibold">Add your Info</h3>
                                        <button
                                            className="bg-transparent border-0 text-black float-right"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="text-black opacity-7 h-6 w-6 text-[15px] block bg-gray-400 py-0 rounded-full">
                                                x
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                First Name
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Last Name
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Experience
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                            <label className="block text-black text-sm font-bold mb-1">
                                                CV
                                            </label>
                                            <input type='file' className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                                        </form>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                ) : null
            }
        </>
    )
}

export default ApplyModal