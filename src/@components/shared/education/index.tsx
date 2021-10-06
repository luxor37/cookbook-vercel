export default function EducationSection({ image, programTitle = "", subTitle = "", date = "", children }) {
    return (
        <div className="row mb-14 text-white">
            <div className="col-md-2 md:block hidden">
                <div className="rounded-full border-8 border-solid border-gray-400 box-border">
                    <img className="flex rounded-full width-100" src={image}  />
                </div>
            </div>
            <div className="col-md-10  ">
                <div className="row h-full">

                    <div className="col-md-10 h-full p-4 rounded-xl bg-opacity-70 bg-black">
                        <div className="my-auto">
                            <div className="text-4xl">{programTitle}</div>
                            <div className="text-2xl text-primary">{subTitle}</div>
                            {children}
                        </div>
                    </div>

                    <div className="col-md-2">
                        <span className="text-black font-bold text-lg">{date}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}