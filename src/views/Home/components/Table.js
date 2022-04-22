import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../Theme/MUI/MuiCheckboxTheme";
import { CreateOutline } from "react-ionicons";
import ReactTooltip from "react-tooltip";
import { useEffect, useContext } from "react";
import { getProducts } from "../../../services/Api";
import { DataContext } from "../../../context/DataContext";

const Table = () => {
  const {
    state: { ids, data, editData, edit, searchTerm },
    dispatch,
  } = useContext(DataContext);

  const handleChange = (event) => {
    if (ids.some((item) => item.id === event.target.id)) {
      let index = ids.findIndex((checkbox) => checkbox.id == event.target.id);
      ids.splice(index, 1);
    } else {
      ids.push({ id: event.target.id });
    }
  };

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response);
      dispatch({ data: response.data });
    });
  }, []);

  const ToEdit = (id, title, location, buy, sell, count) => {
    dispatch({
      editData: {
        id: id,
        title: title,
        location: location,
        buy: buy,
        sell: sell,
        count: count,
      },
    });
    dispatch({ edit: true });
  };

  return (
    <div className="w-[950px] bg-white shadow-xl rounded-lg pb-2 max-h-[73vh] overflow-y-auto">
      <ReactTooltip
        place="top"
        type="dark"
        effect="solid"
        backgroundColor="#63606B"
      />
      <table className="w-full text-center dir-rtl table-typo">
        <thead className="h-[60px]">
          <tr>
            <th>انتخاب</th>
            <th>عنوان</th>
            <th>مکان محصول</th>
            <th>قیمت خرید</th>
            <th>قیمت فروش</th>
            <th>تعداد موجود</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="border-t-[1px] border-tableborder last-border-0">
          {data
            .filter((val, index) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => (
              <tr
                className="border-b-[1px] border-tableborder h-[70px]"
                key={item.id}
              >
                <td>
                  <ThemeProvider theme={theme}>
                    <Checkbox
                      size="small"
                      id={item.id.toString()}
                      onChange={(e) => handleChange(e)}
                    />
                  </ThemeProvider>
                </td>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>{item.buy}</td>
                <td>{item.sell}</td>
                {item.count >= 5 ? (
                  <td>{item.count}</td>
                ) : (
                  <td className="text-red-500 font-semibold">{item.count}</td>
                )}
                <td>
                  <CreateOutline
                    cssClasses="my-0 mx-auto cursor-pointer"
                    color={"#3b82f6"}
                    data-tip={`ویرایش`}
                    onClick={() =>
                      ToEdit(
                        item.id,
                        item.title,
                        item.location,
                        item.buy,
                        item.sell,
                        item.count
                      )
                    }
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
