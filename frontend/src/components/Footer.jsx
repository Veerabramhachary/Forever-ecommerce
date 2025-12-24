import { assets } from "../assets/frontend_assets/assets"

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} alt="footer_logo" className="mb-5 w-32" />
                <p className="w-full md:w-2/3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatem voluptatum repellat eaque harum perspiciatis, cumque dignissimos modi ea facere, pariatur consequatur voluptates nemo sed quidem aliquid, fugit placeat rerum!
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-222-456-7695</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - All Rights reserved</p>
        </div>
    </div>
  )
}
export default Footer