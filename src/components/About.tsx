interface AboutProps {
  title: string;
  description: string;
}
function About({ data }: { data: AboutProps }) {
  return (
    <div class="w-full">
      <h2 class="text-white text-[30px] pb-6">{data?.title}</h2>
      <div class="text-primary">{data?.description}</div>
    </div>
  );
}

export default About;
