import Image from "next/image";


const ClientSatisfaction = () => {
  return (
    <div className="absolute bg-white shadow-md p-4 rounded-md flex items-center gap-3 bottom-4 left-4">
      <Image src="/clientImg.jpg" alt="Satisfied Client" className="w-10 h-10 rounded-full"  width={100} height={100}/>
      <div>
        <h3 className="text-xl font-bold text-yellow-500">3600+</h3>
        <p className="text-sm text-gray-600">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default ClientSatisfaction;
