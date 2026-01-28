export function Hero() {
  return (
    <div className="hero">
      <div className="heroInfo">
        {/* Main header */}
        <h1>Little Lemon</h1>
        {/* sub header */}
        <h3>Chicago</h3>
        {/* Paragraph */}
        <p>
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="HeroImgDiv">
        <img src="/restauranfood.jpg" alt="Hero Image" />
      </div>
    </div>
  );
}
