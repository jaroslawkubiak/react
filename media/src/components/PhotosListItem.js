import { GoTrashcan } from 'react-icons/go';
import { useRemovePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative cursor-pointer m-2" onClick={handleRemovePhoto}>
      <img src={photo.url} alt="random pic" className="h-20 w-20" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-slate-900 text-4xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;
