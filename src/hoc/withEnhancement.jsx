import React from "react";

function withEnhancement(BaseComponent) {
  return function EnhanceComponent(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      //

      return () => {
        //second
      };
    }, []);
    return <BaseComponent {...props} enhanceProps="someVlaues" />;
  };
}

export default withEnhancement;
