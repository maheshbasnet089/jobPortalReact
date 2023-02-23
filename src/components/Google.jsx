import React from "react";
import { useParams } from "react-router-dom";
import preloder from "../preloader/preloder";

const Google = () => {
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    localStorage.setItem("token", id);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8a1f1813765711.56277edb36b94.gif"
          className="h-[100vh] w-[100%]"
        />
      ) : (
        (window.location.href = "/")
      )}
    </div>
  );
};

export default Google;
