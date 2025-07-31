const Story = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center pb-10">
      <div className="w-full px-6 border-b-2 border-b-(--link-color) border-solid py-5 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">My Story</h2>
      </div>
      <p className="pb-0 text-lg pt-6 max-w-2xl">
        I’m driven by the idea that great software blends utility with
        creativity — whether it’s a clean API or a tool that makes someone’s day
        easier.
      </p>
      <p className="text-lg pt-3 max-w-2xl">
        Beyond work and academics, I enjoy staying active through weightlifting,
        bouldering, and cardio, and I love exploring new dishes in the kitchen.
      </p>
    </section>
  );
};

export default Story;
