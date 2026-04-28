import { CiUser } from "react-icons/ci";
import { TbBasket } from "react-icons/tb";
export const Header=()=>{
    return(
        <div className="w-full h-20 items-center justify-center">
        <div className="flex justify-between gap-4 p-6  items-center ">
        <p className="text-2xl text-[#b984db] font-medium pl-2 ">SorBeauty</p>
        <div className="flex items-center justify-center gap-10 ">
        <p className="text-lg font-normal text-[#daade5] hover:text-[#b984db] ">New products</p>
        <p className="text-lg font-normal text-[#daade5]  hover:text-[#b984db]">Brands</p>
        <p className="text-lg font-normal text-[#daade5]  hover:text-[#b984db]">Make Up</p>
        <p className="text-lg font-normal text-[#daade5]  hover:text-[#b984db]">Skin </p>
        <p className="text-lg font-normal text-[#daade5]  hover:text-[#b984db]">Mask</p>
        <p className="text-lg font-normal text-[#daade5]  hover:text-[#b984db]">Best Seller</p>
        </div>
        <div className="flex gap-4 items-center justify-center pr-2">
        < CiUser className="w-6 h-6" />
        <TbBasket className="w-6 h-6" />
        </div>
        </div>
        </div>
    )
}