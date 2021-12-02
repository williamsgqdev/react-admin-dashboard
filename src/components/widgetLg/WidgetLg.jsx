import "./widgetLg.css";

const WidgetLg = () => {
    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amoumnt</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGBTzB8o40FiQ/profile-displayphoto-shrink_800_800/0/1632340179895?e=1642636800&v=beta&t=z2h1yaq45K-S09EJia8X76SnZhHlDMsgg-tYo0aENu0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Popstart </span>
          </td>
          <td className="widgetLgDate">2 june 2021</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGBTzB8o40FiQ/profile-displayphoto-shrink_800_800/0/1632340179895?e=1642636800&v=beta&t=z2h1yaq45K-S09EJia8X76SnZhHlDMsgg-tYo0aENu0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Popstart </span>
          </td>
          <td className="widgetLgDate">2 june 2021</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGBTzB8o40FiQ/profile-displayphoto-shrink_800_800/0/1632340179895?e=1642636800&v=beta&t=z2h1yaq45K-S09EJia8X76SnZhHlDMsgg-tYo0aENu0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Popstart </span>
          </td>
          <td className="widgetLgDate">2 june 2021</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGBTzB8o40FiQ/profile-displayphoto-shrink_800_800/0/1632340179895?e=1642636800&v=beta&t=z2h1yaq45K-S09EJia8X76SnZhHlDMsgg-tYo0aENu0"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Popstart </span>
          </td>
          <td className="widgetLgDate">2 june 2021</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
