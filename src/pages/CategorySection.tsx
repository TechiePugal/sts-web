import React, { useEffect, useState } from 'react';

interface Machine {
  name: string;
  image: string;
  specs: [string, string][];
}

interface CategorySectionProps {
  title: string;
  description: string;
  machines: Machine[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, description, machines }) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // Set on first render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + visibleCards) % machines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [visibleCards, machines.length]);

  const getVisibleMachines = () => {
    const sliceEnd = index + visibleCards;
    if (sliceEnd <= machines.length) {
      return machines.slice(index, sliceEnd);
    }
    return [...machines.slice(index), ...machines.slice(0, sliceEnd - machines.length)];
  };

  const goToSlide = (dotIndex: number) => {
    setIndex((dotIndex * visibleCards) % machines.length);
  };

  const visibleMachines = getVisibleMachines();

  return (
    <div className="mb-16 px-4 sm:px-8">
      <br />
      <h2 className="text-xl sm:text-3xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">{description}</p>

      <div className="flex justify-center gap-4 sm:gap-6 flex-wrap transition-all duration-500">
        {visibleMachines.map((machine, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden w-full sm:w-[30%] transition-transform duration-500"
          >
            {/* Image wrapper with relative positioning */}
            <div className="relative w-full h-40 sm:h-48 overflow-hidden">
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
              {/* Transparent overlay above image */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-transparent z-10"
                aria-hidden="true"
              />
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="font-semibold text-base sm:text-lg mb-2">{machine.name}</h3>
              <table className="text-xs sm:text-sm w-full border-t">
                <tbody>
                  {machine.specs.map(([label, value], idx) => (
                    <tr key={idx}>
                      <td className="py-1 pr-2 font-medium text-gray-700">{label}</td>
                      <td className="py-1 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3 sm:gap-2">
        {Array.from({ length: Math.ceil(machines.length / visibleCards) }).map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 sm:h-3 sm:w-3 rounded-full focus:outline-none transition-colors duration-300 ${
              index === i * visibleCards ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
