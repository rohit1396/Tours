import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <Oval
        height={80}
        width={80}
        color="#0d9488"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#d1d5db"
        strokeWidth={3}
        strokeWidthSecondary={1}
      />
    </div>
  );
};

export default Loading;
