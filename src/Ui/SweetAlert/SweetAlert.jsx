import SweetAlert from "react-bootstrap-sweetalert";
function SweetAlertComponent({ confirm, cancle, title, subtitle, type }) {
  return (
    <SweetAlert
      style={{ zIndex: "1" }}
      title={title}
      onConfirm={confirm}
      // type="danger"
      type={type !== undefined ? type : "warning"}
      showCancel={true}
      confirmBtnStyle={{ backgroundColor: "maroon", border: "2px solid orangered" }}
      onCancel={cancle}
    >
      <h5> {subtitle} </h5>
    </SweetAlert>
  );
}

export default SweetAlertComponent;