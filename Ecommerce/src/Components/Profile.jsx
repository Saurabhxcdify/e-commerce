import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");

  // Redirect to login if user is not logged in
  useEffect(() => {
    if (!username) {
      navigate("/login"); // Redirect to login if no user is found
    } else {
      navigate("/", { state: { username } });
    }
  }, [username, navigate]);

  return null;
};

export default Profile;
