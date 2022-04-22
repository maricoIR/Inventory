import Input from "../../../Theme/Input/Input";
import Button from "../../../Theme/Button/Button";
import { CloseOutline } from "react-ionicons";
import { CheckmarkOutline } from "react-ionicons";
import { useState, useContext } from "react";
import { postProducts } from "../../../services/Api";
import { toast } from "react-toastify";
import { DataContext } from "../../../context/DataContext";

const Add = () => {
  const [product, setProduct] = useState([]);
  const {
    state: { add },
    dispatch,
  } = useContext(DataContext);

  const oninputchange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const addProduct = () => {
    postProducts(product).then((response) => {
      console.log(response);
      if (response.status == 200) {
        toast.success("محصول مورد نظر با موفقیت اضافه شد");
        dispatch({ add: false });
      }
    });
  };
  return (
    <div className="w-[1085px] bg-white shadow-md rounded-2xl py-5 mt-8 mb-8 px-6 border border-blue-200">
      <div className="w-full flex items-center justify-center mt-1">
        <span className="font-medium text-[18px] text-textclr">
          افزودن محصول
        </span>
      </div>
      <div className="w-full flex items-center justify-start gap-5 mt-8 flex-wrap dir-rtl">
        <Input
          placeholder="عنوان"
          name="title"
          value={product.title}
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="مکان محصول"
          name="location"
          value={product.location}
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="قیمت خرید"
          name="buy"
          value={product.buy}
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="قیمت فروش"
          name="sell"
          value={product.sell}
          onChange={(e) => oninputchange(e)}
        />
        <Input
          placeholder="تعداد موجودی"
          name="count"
          value={product.count}
          onChange={(e) => oninputchange(e)}
        />
      </div>
      <div className="w-full flex flex-row-reverse items-center justify-center gap-12 mt-16 mb-5">
        <Button
          title="انصراف"
          className="border-red-500 w-[350px] h-9 bg-red-500 text-sm text-white font-medium rounded-md px-2 py-1"
          onClick={() => dispatch({ add: false })}
          icon={<CloseOutline color={"#fff"} width={"20px"} />}
        />
        <Button
          title="افزودن محصول"
          className="border-blue-500 w-[350px] h-9 bg-blue-500 text-sm text-white font-medium rounded-md px-2 py-1"
          icon={<CheckmarkOutline color={"#fff"} width={"20px"} />}
          onClick={() => addProduct()}
        />
      </div>
    </div>
  );
};

export default Add;
