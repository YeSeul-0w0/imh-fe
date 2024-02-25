import { useNavigate } from "react-router-dom";
function MainScreen() {
  const navigate = useNavigate();
  const goCalendar = () => {
    navigate("/calendar");
  };
  return (
    <div>
      test
      <br />
      <button
        onClick={() => {
          goCalendar();
        }}
      >
        {" "}
        see the calendar
      </button>
    </div>
  );
}

export default MainScreen;
