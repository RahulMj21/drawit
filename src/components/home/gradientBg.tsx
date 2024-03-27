const GradientBg = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-square-gradient bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial-gradient"></div>
    </div>
  );
};

export default GradientBg;
