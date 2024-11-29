interface props {
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  header1: string;
  header2: string;
}

const About = ({ p1, p2, p3, header1, header2, p4 }: props) => {
  return (
    <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
      <div className="flex flex-col gap-[60px]">
        <div>
          <p className="header-1">{header1}</p>
          <p className="header-2">{header2}</p>
        </div>
        <div>
          <p className="text-center pb-5 text-lg font-semibold">{p4}</p>
          <p className="text-lg">{p1}</p>
          <p className="mt-4 text-lg">{p2}</p>
          <p className="mt-4 text-lg">{p3}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
