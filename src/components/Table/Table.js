export const Table = ({ list, headers, width = "auto", height = "auto" }) => {
  return (
    <div className="table">
      <h2>Your Orders</h2>
      <table
        cellSpacing="70"
        style={{ width: width, height: height, padding: "10px 10px" }}
      >
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((elem) => (
            <tr key={elem.id}>
              <td> {elem.id}</td>
              <td> {elem.buyer.name}</td>
              <td>
                {elem.items.map((el, index) => (
                  <span key={index}>
                    {el.item.name} X {el.cartQuantity}
                    {"\n"}
                  </span>
                ))}
              </td>
              <td>${elem.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
