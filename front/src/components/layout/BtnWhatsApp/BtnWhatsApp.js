import "./btnwhatsap.css";

const BtnWhatsApp = ({ nroCel }) => {
  return (
    <div class="btn-whatsapp">
      <a
        href={"https://api.whatsapp.com/send?phone=5199999999" + nroCel}
        target="_blank"
      >
        <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="" />
      </a>
    </div>
  );
};

export default BtnWhatsApp;
