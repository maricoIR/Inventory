import Input from "../../../Theme/Input/Input";
import Button from "../../../Theme/Button/Button";
import { CloseOutline } from "react-ionicons";
import { CheckmarkOutline } from "react-ionicons";
import { putProduct } from "../../../services/Api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const Edit = () => {
  const {
    state: { editData, edit },
    dispatch,
  } = useContext(DataContext);

  const updateList = (id) => {
    putProduct(id, editData).then((res) => {
      console.log(res);
      if (res.status == 200) {
        toast.success("ویرایش محصول با موفقیت انجام شد");
        dispatch({ edit: false });
      }
    });
  };

  const oninputchange = (event) => {
    dispatch({
      editData: {
        ...editData,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <div className="lg:w-[1085px] w-full bg-white shadow-md rounded-2xl py-5 mt-8 mb-8 px-6 border border-blue-200">
      <div className="w-full flex items-center justify-center mt-1">
        <span className="font-medium text-[18px] text-textclr">
          ویرایش محصول
        </span>
      </div>
      <div className="w-full flex items-center justify-start gap-5 mt-8 flex-wrap dir-rtl">
        <Input
          placeholder="عنوان"
          value={editData.title}
          name="title"
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="مکان محصول"
          name="location"
          value={editData.location}
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="قیمت خرید"
          name="buy"
          value={editData.buy}
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="قیمت فروش"
          name="sell"
          value={editData.sell}
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="تعداد موجودی"
          name="count"
          value={editData.count}
          onChange={(e) => oninputchange(e)}
        />
      </div>
      <div className="w-full flex flex-row-reverse items-center justify-center gap-12 mt-16 mb-5">
        <Button
          title="انصراف"
          className="border-red-500 w-[350px] h-9 bg-red-500 text-sm text-white font-medium rounded-md px-2 py-1"
          onClick={() => dispatch({ edit: false })}
          icon={<CloseOutline color={"#fff"} width={"20px"} />}
        />
        <Button
          title="تایید"
          className="border-green-500 w-[350px] h-9 bg-green-500 text-sm text-white font-medium rounded-md px-2 py-1"
          icon={<CheckmarkOutline color={"#fff"} width={"20px"} />}
          onClick={() => updateList(editData.id)}
        />
      </div>
    </div>
  );
};

export default Edit;
