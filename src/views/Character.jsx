export const Character = (props) => {
  const { name, image, species, status } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} width="200" />
      <div class="px-6 py-4 text-center">
        <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
        <p class="text-gray-700">{species}</p>
        <p class="text-gray-700">{status}</p>
      </div>
    </div>
  );
};
