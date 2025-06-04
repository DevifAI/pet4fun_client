import pagination_icon01 from "../assets/img/icon/pagination_icon01.svg";
import pagination_icon02 from "../assets/img/icon/pagination_icon02.svg";

const Pagination = () => (
  <nav className="pagination__wrap mt-50">
    <ul className="list-wrap">
      <li className="link-arrow">
        <a href="#">
          <img src={pagination_icon01} alt="" className="injectable" />
        </a>
      </li>
      <li className="active">
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li className="link-arrow">
        <a href="#">
          <img src={pagination_icon02} alt="" className="injectable" />
        </a>
      </li>
    </ul>
  </nav>
);

export default Pagination;
