

const Slides = ({image,text,ptext}) => {
    return (
        <div className="hero h-[38rem]" style={{backgroundImage: `url(${image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{text}</h1>
      <p className="mb-5 text-[20px]">{ptext}</p>
      <button className="btn btn-primary bg-transparent">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Slides;