import Filter from "./Filter";
import FilterWrapper from "./FilterWrapper ";
import OrderList from "./OrderList";

const OrderContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <Filter />
        <OrderList />
        <FilterWrapper />
      </div>
    </div>
  );
};

export default OrderContainer;
