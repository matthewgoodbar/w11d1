import { useEffect, useState } from "react";

function Message({ size }) {
  const [sizeClass, setSizeClass] = useState("")
  useEffect(() => {
    // console.log('PictureDisplay size', size)
    let className = ""
    switch (size) {
      case "m":
        className = "medium"
        break;

      case "l":
        className = "large"
        break;

      case "xl":
        className = "xlarge"
        break;
    
      default:
        className = "small"
        break;
    }
    setSizeClass(className);
  }, [size])

  return (
    <div className={`message ${sizeClass}`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;