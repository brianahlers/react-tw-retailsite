export function Card({ item }) {
  return (
    <div className="">
      <div>
        <div>{item.title}</div>
        <div>SHOP NOW +</div>
      </div>
      <img src="{item.src}" alt="" />
    </div>
  );
}
