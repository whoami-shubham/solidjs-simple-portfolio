import { mergeProps } from "solid-js";

function Divider({ data }: { data: { className: string } }) {
  const mergeProp = mergeProps({ className: "my-8" }, data);
  return <div class={mergeProp.className}></div>;
}

export default Divider;
