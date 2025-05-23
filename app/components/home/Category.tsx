"use*client";

const Category = () => {
  const categorylist = [
    { name: "Ayakkabı" },
    { name: "Ayakkabı" },
    { name: "Ayakkabı" },
    { name: "Ayakkabı" },
    { name: "Ayakkabı" },
    { name: "Ayakkabı" },
    { name: "Ayakkabı" },
  ];
  return (
    <div className="flex items-center justify-center  px-3 gap-3 md:gap-10  my-5 md:my-10 md:my-10  md:py-8 overflow-x-auto">
      {categorylist.map((category, index) => (
        <div
          className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 justify-center cursor-pointer px-3 py-2 items-center "
          key={index}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
