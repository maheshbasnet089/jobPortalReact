export default function AdminCard() {
    return (
        <>
            {/* Simple Statistics with Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
                {/* Card: Simple Widget with Action */}
                <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                    {/* Card Body: Simple Widget with Action */}
                    <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
                        <dl>
                            <dt className="text-2xl font-semibold">
                                146
                            </dt>
                            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                                Jobs
                            </dd>
                        </dl>
                        <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-700 bg-emerald-200">
                            <svg className="hi-solid hi-arrow-circle-up inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" /></svg>
                            <span>7.9%</span>
                        </div>
                    </div>
                    {/* END Card Body: Simple Widget with Action */}

                </div>
                {/* END Card: Simple Widget with Action */}
                {/* Card: Simple Widget with Action */}
                <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                    {/* Card Body: Simple Widget with Action */}
                    <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
                        <dl>
                            <dt className="text-2xl font-semibold">

                            </dt>
                            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                                Earnings
                            </dd>
                        </dl>
                        <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-red-700 bg-red-200">
                            <svg className="hi-solid hi-arrow-circle-down inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" /></svg>
                            <span>6.9%</span>
                        </div>
                    </div>
                    {/* END Card Body: Simple Widget with Action */}

                </div>
                {/* END Card: Simple Widget with Action */}
                {/* Card: Simple Widget with Action */}
                <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                    {/* Card Body: Simple Widget with Action */}
                    <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
                        <dl>
                            <dt className="text-2xl font-semibold">
                                100
                            </dt>
                            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">
                                user
                            </dd>
                        </dl>
                        <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-700 bg-emerald-200">
                            <svg className="hi-solid hi-arrow-circle-up inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" /></svg>
                            <span>5.6%</span>
                        </div>
                    </div>
                    {/* END Card Body: Simple Widget with Action */}

                </div>
                {/* END Card: Simple Widget with Action */}
            </div>
            {/* END Simple Statistics with Action Grid */}
        </>
    )
}