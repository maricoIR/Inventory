import { SearchOutline } from "react-ionicons";
import { TrashOutline } from "react-ionicons";
import { Add } from "react-ionicons";
import { toast } from "react-toastify";
import { deleteProducts } from "../../../services/Api";
import { DataContext } from "../../../context/DataContext";
import { useContext } from "react";

const Actionbar = () => {
  const {
    state: { ids, data, add, searchTerm },
    dispatch,
  } = useContext(DataContext);

  const Delete = () => {
    if (!ids.length) {
      toast.error("محصولی برای حذف انتخاب نشده است");
    } else {
      deleteProducts(ids).then((response) => {
        console.log(response);
        toast.success("عملیات حذف با موفقیت انجام شد");
        dispatch({
          data: data.filter((value) => !ids.includes(value.id)),
        });
      });
    }
  };

  return (
    <div className="lg:w-[950px] w-full bg-white shadow-md rounded-2xl h-[100px] mt-8 mb-8 px-8 border border-blue-200">
      <div className="flex flex-row-reverse items-center justify-between w-full h-full">
        <div className="relative flex flex-row items-center gap-2 border-b border-[#9f9f9f] w-[45%] lg:w-[30%]">
          <input
            type="text"
            className="bg-transparent outline-none border-none dir-rtl mb-2 w-full text-textclr font-normal text-[15px]"
            placeholder="جستجو..."
            onChange={(e) => dispatch({ searchTerm: e.target.value })}
          />
          <SearchOutline color={"#525c66"} cssClasses="mb-2" width={"22px"} />
        </div>

        <div className="flex gap-6 items-center">
          <div
            className="flex items-center gap-2 border border-red-500 rounded-md px-2 py-1 cursor-pointer"
            onClick={() => Delete()}
          >
            <span className="text-sm text-red-500 font-medium">حذف</span>
            <TrashOutline color={"#ef4444"} width={"20px"} />
          </div>
          <div
            className="flex items-center gap-2 border border-sky-500 rounded-md px-2 py-1 cursor-pointer"
            onClick={() => dispatch({ add: true })}
          >
            <span className="text-sm text-sky-500 font-medium">افزودن</span>
            <Add color={"#3b82f6"} width={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionbar;
