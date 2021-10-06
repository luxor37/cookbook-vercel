export default function ExperienceSection({ image, jobTitle = "", subTitle = "", date = "", type = "", children }) {
    return (
        <div className="row mb-14 ">
            <div className="col-md-2 md:block hidden">
                <div className="rounded-full border-8 border-solid border-gray-400 box-border">
                    <img className="flex rounded-full width-100" src={image}  />
                </div>
            </div>
            <div className="col-md-10  ">
                <div className="row h-full">

                    <div className="col-md-10 h-full p-4">
                        <div className="my-auto">
                            <div className="text-4xl">{jobTitle}</div>
                            <div className="text-2xl text-primary">{subTitle}</div>
                            {children}
                        </div>
                    </div>

                    <div className=" pt-6 col-md-2">
                        <span className="text-black font-bold text-lg">{date}</span><br />
                        <span className=" text-primary font-bold text-base">{type}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}