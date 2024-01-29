export function Card({ item }) {
  return (
    <div className={`${item.className} cursor-pointer transition hover:scale-105`}>
      <div>
        <div>{item.title}</div>
        <div>SHOP NOW +</div>
      </div>
      <img src={item.src} alt="" />
    </div>
  );
}
