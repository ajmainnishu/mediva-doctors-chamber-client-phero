import banner from '../../assets/images/banner/doctor_banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Modern And Latest Technology Treatment</h1>
                        <p className="py-6">Discover The Best Doctors, Clinic, And Hospital The City Nearest You</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;