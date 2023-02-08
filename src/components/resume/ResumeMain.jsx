import Footer from "../Footer";
import Navbar from "../Navbar";
import OtherDescription from "./OtherDescription";
import Resume from "./Resume";
import WorkHistory from "./WorkHistory";
import { FcBriefcase } from "react-icons/fc";
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const ResumeMain = () => {
    const componentRef = useRef(null);
    const [isPdfGenerated, setIsPdfGenerated] = useState(false);

    const handleDownloadPdf = async () => {
        const canvas = await html2canvas(componentRef.current);
        const pdf = new jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const width = pdf.internal.pageSize.getWidth();
        const height = 1600 * width / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("my-component.pdf");
        setIsPdfGenerated(true);
    };
    return (
        <>
            <Navbar />
            <div className="w-[80%] m-auto">
                <div ref={componentRef}>
                    <Resume />
                    <div className="grid gap-4 pt-10" id="report">
                        <div className="flex-1">
                            <OtherDescription />
                        </div>
                        <div className="flex-1">
                            <WorkHistory />
                        </div>

                    </div>
                </div>

                <div className="pb-8 flex justify-end">
                    <a className="w-[200px] flex px-6 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg bg-green-400 hover:text-black hover:bg-white" onClick={handleDownloadPdf}>
                        <FcBriefcase className="text-[22px] " />
                        <p className="pl-2">Download CV</p>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ResumeMain;
